import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToladataApiService } from '@app/services/toladata-api/toladata-api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToladataApiInterceptorService } from '@app/services/toladata-api/toladata-api-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ToladataApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ToladataApiInterceptorService,
      multi: true
    }
  ],
})
export class ToladataApiModule { }
