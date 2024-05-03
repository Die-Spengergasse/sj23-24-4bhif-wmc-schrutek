import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

// Interceptors
// https://medium.com/@jaydeepvpatil225/http-interceptors-in-angular-6e9891ae0538

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler)
    : Observable<HttpEvent<unknown>> {
    const cloneRequest = request.clone({
      headers: new HttpHeaders({
        'ACCESS-CONTROL-ALLOW-ORIGIN': 'http://localhost:4200',
        'CONTENT-TYPE': 'application/json',
        'other-info': 'whatever',
      })
    });
    return next.handle(cloneRequest);
  }
}
