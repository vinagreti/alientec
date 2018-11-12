import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivityFormComponent } from '@app/components/activity/activity-form/activity-form.component';

@Injectable({
  providedIn: 'root'
})
export class ActivityFormService {

  constructor(
    private dialog: MatDialog,
  ) { }

  open(program) {
    const dialogRef = this.dialog.open(ActivityFormComponent);
    dialogRef.componentInstance.program = program;
    return dialogRef;
  }
}
