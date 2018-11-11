import { Component, AfterViewInit, Input } from '@angular/core';
import { Program } from '@app/models/program';
import { Observable } from 'rxjs';
import * as fromActivity from '@app/redux/activity/activity.reducer';
import { Store } from '@ngrx/store';
import { Activity } from '@app/models/activity';
import { map, tap, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements AfterViewInit {

  loading = true;

  activities$: Observable<Activity[]>;

  displayedColumns: string[] = ['name', 'startdate', 'enddate', 'action'];

  @Input() program: Program;

  constructor(
    private store: Store<fromActivity.State>,
  ) { }

  ngAfterViewInit() {
    this.activities$ = this.store.select<fromActivity.State>('activities')
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
        map((res: fromActivity.State) => {
          return res.collection.filter(activity => {
            return activity.workflowlevel1 === this.program.url;
          });
        }),
        tap(res => this.loading = !res),
    );

    this.activities$.subscribe(_ => { });
  }

}
