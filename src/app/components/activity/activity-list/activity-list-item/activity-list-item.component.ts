import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Activity } from '../../../../models/activity';
import { DropActivity, ActivityActions } from '@app/redux/activity/activity.actions';

@Component({
  selector: 'app-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit {

  @Input() activity: Activity;

  @Output() delete = new EventEmitter();

  constructor(
    private store: Store<Activity>,
  ) { }

  ngOnInit() {
  }

  drop() {
    const action: ActivityActions = new DropActivity(this.activity);
    this.store.dispatch(action);
  }

}
