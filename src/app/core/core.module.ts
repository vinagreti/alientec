import { NgModule } from '@angular/core';
import { MatNativeDateModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, NativeDateAdapter, DateAdapter, MatDatepickerModule } from '@angular/material';
import { AppReduxModule } from '@app/redux/redux.module';
import { DatePipe } from '@angular/common';

export class CustomMatDatePickerFormat extends NativeDateAdapter {
  format(date: Date): string {
    return new DatePipe('en-US').transform(date, 'dd.MM.yyyy');
  }
}

@NgModule({
  declarations: [],
  exports: [
    AppReduxModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 4e3 } },
    { provide: DateAdapter, useClass: CustomMatDatePickerFormat },
  ]
})
export class CoreModule { }
