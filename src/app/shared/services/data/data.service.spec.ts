import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  interface Test {
    testData: string;
  }
  let service: DataService<Test>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('retrieve', () => {
    it('should accept apiUrl and call httpClient get with correct apiUrl and method GET', () => {
      service.retrieve('apiUrl').subscribe();
      const req = httpMock.expectOne('apiUrl');
      expect(req.request.method).toBe('GET');
      expect(req.request.url).toBe('apiUrl');
    });

    describe('when success', () => {
      it('should return proper data', () => {
        const testData: Test = { testData: 'testData' };
        let response;
        service.retrieve('apiUrl').subscribe((res) => (response = res));
        const req = httpMock.expectOne('apiUrl');
        expect(req.request.responseType).toEqual('json');
        expect(req.cancelled).toBeFalsy();
        req.flush(testData);
        expect(response).toEqual(testData);
      });
    });

    describe('when failure', () => {
      it('should return error data', () => {
        let error;
        service.retrieve('apiUrl').subscribe(
          (res) => {},
          (err) => (error = err)
        );
        httpMock.expectOne('apiUrl').flush('error', { status: 400, statusText: 'Bad request' });
        expect(error).toEqual({ code: 'error.technical', message: 'We have encountered a technical error' });
      });
    });
  });
});
