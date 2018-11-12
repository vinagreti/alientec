import { NgModule } from '@angular/core';
import { MatNativeDateModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_DATE_FORMATS, NativeDateAdapter, DateAdapter } from '@angular/material';
import { AppReduxModule } from '@app/redux/redux.module';
import { DatePipe } from '@angular/common';

class PickDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    return new DatePipe('en-US').transform(date, 'dd.MM.yyyy');
  }
}

@NgModule({
  declarations: [],
  exports: [
    MatNativeDateModule,
    AppReduxModule,
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 4e3 } },
    { provide: DateAdapter, useClass: PickDateAdapter },
  ]
})
export class CoreModule { }
