import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmService } from '@app/services/confirm/confirm.service';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { ConfirmServiceComponent } from '@app/services/confirm/confirm-service.component';

@NgModule({
  declarations: [
    ConfirmServiceComponent,
  ],
  entryComponents: [
    ConfirmServiceComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    ConfirmService,
  ]
})
export class ConfirmServiceModule { }
