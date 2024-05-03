import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { AlbumService } from './album.service';
import { AlbumDto } from 'src/app/model/album.dto';

// https://angular.io/guide/http-test-requests
// https://angular.io/api/common/http/testing/HttpClientTestingModule

describe('AlbumService', () => {
  let httpTestingController: HttpTestingController;
  let service: AlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AlbumService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getAll', () => {
    it('should return all Albums', () => {
      const expected: AlbumDto[] = [{
        name: "Test Album 01",
        description: "Test Album 01 Description",
        creationTimeStamp: new Date()
      }];

      service.getAll().subscribe((actual: any) => {
        expect(actual).toEqual(expected);
      });
      
      const testRequest = httpTestingController
        .expectOne('https://localhost:7022/api/Album/ok');
      expect(testRequest.request.method).toEqual('GET');
    });
  });
});
