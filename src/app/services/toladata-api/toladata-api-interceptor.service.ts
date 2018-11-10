import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const TOKEN = 'GfR6vIHG0zTWaJle6TjNXvYUrjDn6g';

@Injectable({
  providedIn: 'root'
})
export class ToladataApiInterceptorService {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.handleAccess(request, next);
  }

  private handleAccess(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let changedRequest = request;

    const headerSettings: { [name: string]: string | string[]; } = {};

    headerSettings['Authorization'] = 'Bearer ' + TOKEN;

    headerSettings['Content-Type'] = 'application/json';

    const newHeader = new HttpHeaders(headerSettings);

    changedRequest = request.clone({ headers: newHeader });

    return next.handle(changedRequest);

  }

}
