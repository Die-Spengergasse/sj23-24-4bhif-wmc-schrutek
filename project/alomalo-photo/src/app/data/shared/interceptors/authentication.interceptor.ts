import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler)
    : Observable<HttpEvent<unknown>> {
    const cloneRequest = request.clone({
      headers: request.headers
        .set('Authentication', 'xxxxxxxxxxxxxxxxxxxxxxxxx')
    });
    return next.handle(cloneRequest);
  }
}
