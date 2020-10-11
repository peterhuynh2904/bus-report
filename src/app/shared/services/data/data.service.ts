import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { get } from 'lodash-es';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IErrorData } from '../../interfaces/shared.interface';

@Injectable({ providedIn: 'root' })
export class DataService<T> {
  constructor(private httpClient: HttpClient) {}

  // We create a custom GET to handle response, intercept error. Ideally, we would cache response when needed to
  retrieve(apiUrl: string): Observable<T | IErrorData> {
    return this.httpClient.get(apiUrl).pipe(
      map((response) => {
        return get(response, 'data', response) || {};
      }),
      catchError(() => {
        return throwError({ code: 'error.technical', message: 'We have encountered a technical error' });
      })
    );
  }
}
