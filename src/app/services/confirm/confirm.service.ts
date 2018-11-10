import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmServiceComponent } from '@app/services/confirm/confirm-service.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(
    private dialog: MatDialog
  ) { }

  confirm(msg) {
    const dialogRef = this.dialog.open(ConfirmServiceComponent);
    dialogRef.componentInstance.msg = msg;
    return dialogRef.afterClosed();
  }
}
