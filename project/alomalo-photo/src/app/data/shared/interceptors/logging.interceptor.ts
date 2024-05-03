import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  public count: number = 0;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('HTTP-REQUEST-LOG:', request);

    return next.handle(request).pipe(
      tap({
        next: (event: HttpEvent<any>) => {
          console.log('Incoming HTTP response', event, this.count)
        },
        error: (error: HttpErrorResponse) => { 
          console.log(error)
        }
      })
    );
  }
}
