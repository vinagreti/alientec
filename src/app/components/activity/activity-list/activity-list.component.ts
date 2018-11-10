import { Component, OnInit, Input } from '@angular/core';
import { Program } from '@app/models/program';
import { Observable } from 'rxjs';
import * as fromActivity from '@app/redux/activity/activity.reducer';
import { Store } from '@ngrx/store';
import { Activity } from '@app/models/activity';
import { LoadActivities } from '@app/redux/activity/activity.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  activities$: Observable<Activity[]>;

  @Input() program: Program;

  constructor(
    private store: Store<fromActivity.State>,
  ) { }

  ngOnInit() {
    this.activities$ = this.store.select<fromActivity.State>('activities')
      .pipe(
        map((res: fromActivity.State) => {
          return res.collection.filter(activity => {
            return activity.id === this.program.id;
          });
        })
      );
  }

}
