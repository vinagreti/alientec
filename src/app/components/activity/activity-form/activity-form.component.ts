import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  AddActivity,
  ActivityActions,
  ActivityActionTypes,
  AddActivitySuccess,
  AddActivityError
} from '@app/redux/activity/activity.actions';
import * as fromActivity from '@app/redux/activity/activity.reducer';
import * as moment from 'moment';
import { Store, ActionsSubject } from '@ngrx/store';
import { Activity } from '@app/models/activity';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ramdomUid } from '@app/helpers/number-helpers/number-helpers';


@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnDestroy, OnInit {

  submitUid = ramdomUid();

  reactiveForm: FormGroup;

  saving: boolean;

  subsc = new Subscription();

  @Input() program;

  constructor(
    private store: Store<fromActivity.State>,
    private formBuilder: FormBuilder,
    private actionsSubject: ActionsSubject,
    private dialog: MatDialogRef<ActivityFormComponent>,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    this.startForm();
    this.subscribeToCreationResponse();
  }

  ngOnDestroy() {
    this.subsc.unsubscribe();
  }

  blurAndPick(input, picker) {
    input.blur();
    picker.open();
  }

  submitForm() {
    const payload = this.createPayloadFromForm();
    const action: ActivityActions = new AddActivity(payload, this.submitUid);
    this.store.dispatch(action);
    this.saving = true;
  }

  private informInsertion() {
    this.snack.open(`Activity ${this.reactiveForm.value.name} created!`, 'Close');
  }

  private informInsertionProblem() {
    this.snack.open(`Could not create ${this.reactiveForm.value.name}`, 'Close');
  }

  private subscribeToCreationResponse() {
    this.subsc = this.actionsSubject.subscribe((action: AddActivitySuccess | AddActivityError) => {
      if (action && action.data) {
        this.actBasedOnAddResponse(action);
      }
    });
  }

  private actBasedOnAddResponse(action: AddActivitySuccess | AddActivityError) {
    const sameId = action.data.uid === this.submitUid;
    if (sameId) {
      if (action.type === ActivityActionTypes.AddActivitySuccess) {
        this.dialog.close(true);
        this.informInsertion();
      }
      if (action.type === ActivityActionTypes.AddActivityError) {
        this.informInsertionProblem();
      }
      this.saving = false;
    }
  }

  private createPayloadFromForm() {
    const payload: Activity = {
      name: this.reactiveForm.value.name,
      workflowlevel1: this.program.url,
    };

    if (this.reactiveForm.value.startDate) {
      payload.expected_start_date = moment(this.reactiveForm.value.startDate).format();
    }

    if (this.reactiveForm.value.endDate) {
      payload.expected_end_date = moment(this.reactiveForm.value.endDate).format();
    }

    return payload;
  }

  private startForm() {
    this.reactiveForm = this.formBuilder.group({
      endDate: [''],
      name: ['', Validators.required],
      startDate: [''],
    });
  }

}
