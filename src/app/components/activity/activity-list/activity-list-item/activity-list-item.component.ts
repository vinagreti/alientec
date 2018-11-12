import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Activity } from '@app/models/activity';
import {
  ActivityActions,
  DropActivity,
  ActivityActionTypes,
  DropActivityError,
  DropActivityCancel,
  DropActivitySuccess
} from '@app/redux/activity/activity.actions';
import { Store, ActionsSubject } from '@ngrx/store';
import * as fromActivity from '@app/redux/activity/activity.reducer';
import { ramdomUid } from '@app/helpers/number-helpers/number-helpers';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { ConfirmService } from '@app/services/confirm/confirm.service';

@Component({
  selector: 'app-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnDestroy, OnInit {

  dropUid = ramdomUid();

  removing: boolean;

  subsc = new Subscription();

  @Input() activity: Activity;

  constructor(
    private actionsSubject: ActionsSubject,
    private confirmService: ConfirmService,
    private store: Store<fromActivity.State>,
    private snack: MatSnackBar,
  ) { }

  ngOnInit() {
    this.subscribeToDropResponse();
  }

  ngOnDestroy() {
    this.subsc.unsubscribe();
  }

  delete() {
    this.confirmBeforeDrop();
  }

  private confirmBeforeDrop() {
    this.confirmService.confirm(`Would you like to delete the activity ${this.activity.name}?`)
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          return this.doDrop();
        }
      });
  }

  private doDrop() {
    this.removing = true;
    const action: ActivityActions = new DropActivity(this.activity, this.dropUid);
    this.store.dispatch(action);
  }

  private informRemotionProblem() {
    this.snack.open(`Could not remove ${this.activity.name}`, 'Close');
  }

  private informRemotion() {
    this.snack.open(`Activity ${this.activity.name} removed!`, 'Close');
  }

  private subscribeToDropResponse() {
    this.subsc = this.actionsSubject.subscribe((action: DropActivityError | DropActivityCancel | DropActivitySuccess) => {
      if (action && action.data) {
        this.actBasedOnDropResponse(action);
      }
    });
  }

  private actBasedOnDropResponse(action: DropActivityError | DropActivityCancel | DropActivitySuccess) {
    const sameId = action.data.uid === this.dropUid;
    if (sameId) {
      if (action.type === ActivityActionTypes.DropActivityError || action.type === ActivityActionTypes.DropActivityCancel) {
        this.removing = false;
      }
      if (action.type === ActivityActionTypes.DropActivityError) {
        this.informRemotionProblem();
      }
      if (action.type === ActivityActionTypes.DropActivitySuccess) {
        this.informRemotion();
      }
    }
  }
}
