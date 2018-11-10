import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '@app/models/activity';
import { ActivityActions, DropActivity } from '@app/redux/activity/activity.actions';
import { Store } from '@ngrx/store';
import * as fromActivity from '@app/redux/activity/activity.reducer';

@Component({
  selector: 'app-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit {

  @Input() activity: Activity;

  constructor(
    private store: Store<fromActivity.State>,
  ) { }

  ngOnInit() {
  }

  delete() {
    const action: ActivityActions = new DropActivity(this.activity);
    this.store.dispatch(action);
  }
}
