import { Component, OnInit, Input } from '@angular/core';
import { Program } from '@app/models/program';
import { Observable } from 'rxjs';
import * as fromActivity from '@app/redux/activity/activity.reducer';
import { Store } from '@ngrx/store';
import { Activity } from '@app/models/activity';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  activities$: Observable<Activity[]>;

  displayedColumns: string[] = ['name', 'startdate', 'enddate', 'action'];

  @Input() program: Program;

  constructor(
    private store: Store<fromActivity.State>,
  ) { }

  ngOnInit() {
    this.activities$ = this.store.select<fromActivity.State>('activities')
      .pipe(
        map((res: fromActivity.State) => {
          return res.collection.filter(activity => {
            return activity.workflowlevel1 === this.program.url;
          });
        })
      );
  }

}
