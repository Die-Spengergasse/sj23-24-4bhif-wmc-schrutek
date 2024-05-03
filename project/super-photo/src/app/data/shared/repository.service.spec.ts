import { TestBed } from '@angular/core/testing';

import { RepositoryService } from './repository.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AlbumDto } from 'src/app/model/album.dto';
import { EnvironmentUrlService } from '../environment-url.service';

describe('RepositoryService', () => {
  let httpTestingController: HttpTestingController;
  let service: RepositoryService<AlbumDto>;
  let environmentUrlService: EnvironmentUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RepositoryService);
    environmentUrlService = TestBed.inject(EnvironmentUrlService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('get', () => {
    it('should return all Albums', () => {
      const expected: AlbumDto[] = [{
        name: "Test Album 01",
        description: "Test Album 01 Description",
        creationTimeStamp: new Date()
      }];

      service.getData('api/Album/ok').subscribe((actual: any) => {
        expect(actual).toEqual(expected);
      });
      
      const testRequest = httpTestingController
        .expectOne(`${environmentUrlService.urlAddress}/api/Album/ok`);

      expect(testRequest.request.method).toEqual('GET');
      expect(testRequest.request.headers.has('ACCESS-CONTROL-ALLOW-ORIGIN')).toBeTrue();
      expect(testRequest.request.headers.get('CONTENT-TYPE')).toEqual('application/json');
    });
  });
});
