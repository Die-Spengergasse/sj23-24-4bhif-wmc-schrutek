import { TestBed } from '@angular/core/testing';

import { AuthenticationInterceptor } from './authentication.interceptor';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { EnvironmentUrlService } from '../../environment-url.service';

describe('AuthenticationInterceptor', () => {
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  let environmentUrlService: EnvironmentUrlService;

  beforeEach(() => { 
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthenticationInterceptor,
          { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
      ]
    })
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    environmentUrlService = TestBed.inject(EnvironmentUrlService);
  });

  it('should contain authentication in header', () => {
    // arrange
    let url = `${environmentUrlService.urlAddress}/api/Album/ok`;

    //act
    httpClient.get(url).subscribe();

    // assert
    const req = httpTestingController.expectOne(url);
    expect(req.request.headers.get('Authentication')).toEqual(
      'xxxxxxxxxxxxxxxxxxxxxxxxx'
    );
  });
});
