import { Component, OnInit } from '@angular/core';
import { Program } from '@app/models/program';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadPrograms } from '@app/redux/program/program.actions';
import * as fromProgram from '@app/redux/program/program.reducer';
import { map, tap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { LoadActivities } from '@app/redux/activity/activity.actions';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {

  loading = true;

  programs$: Observable<Program[]>;

  constructor(
    private store: Store<fromProgram.State>,
  ) { }

  ngOnInit() {
    this.initProgramsStream();
    this.bindProgramsStreamToLocalObservable();
  }

  private initProgramsStream() {
    this.store.dispatch(new LoadPrograms());
    this.store.dispatch(new LoadActivities());
  }

  private bindProgramsStreamToLocalObservable() {
    this.programs$ = this.store.select<fromProgram.State>('programs')
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
        map((res: fromProgram.State) => res.collection),
        tap(res => {
          this.loading = !res;
        }),
    );

    this.programs$.subscribe(_ => { });
  }

}
