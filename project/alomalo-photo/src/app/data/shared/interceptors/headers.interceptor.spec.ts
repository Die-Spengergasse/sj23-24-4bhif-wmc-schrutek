import { TestBed } from '@angular/core/testing';

import { HeadersInterceptor } from './headers.interceptor';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { EnvironmentUrlService } from '../../environment-url.service';

// https://blog.stackademic.com/how-to-test-a-functional-interceptor-in-angular-6c8095c1fb7d

describe('HeadersInterceptor', () => {
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  let environmentUrlService: EnvironmentUrlService;  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeadersInterceptor,
        { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
      ],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    environmentUrlService = TestBed.inject(EnvironmentUrlService);
  });
  
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should has \'other-info\'-header', () => {
    //arrange
    const url = `${environmentUrlService.urlAddress}/api/Album/ok`;

    //act
    httpClient.get(url).subscribe();

    // assert
    const req = httpTestingController.expectOne(url);
    expect(req.request.headers.get('other-info')).toEqual(
      'whatever'
    );
  });
});
