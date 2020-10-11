import { Observable } from 'rxjs';
import { IErrorData } from '../../interfaces/shared.interface';

export interface ICustomHttpClientHttp<T> {
  retrieve(): Observable<T | IErrorData>
}
