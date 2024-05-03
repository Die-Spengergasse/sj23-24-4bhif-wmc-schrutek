import { TestBed } from '@angular/core/testing';

import { LoggingInterceptor } from './logging.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe('LoggingInterceptor', () => {

  beforeEach(() => { 
    TestBed.configureTestingModule({
      imports:[ ],
      providers: [
        LoggingInterceptor,
        { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
      ],
    });

  });
});
