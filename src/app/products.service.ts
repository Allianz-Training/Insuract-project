import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Insurance } from './Insurance';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  InsuranceAPI = 'http://localhost:8080/product/';

  constructor(private http: HttpClient) {}

  public getInsurance(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.InsuranceAPI);
  }

  public getInsuranceById(id: any): Observable<any> {
    const url = `${this.InsuranceAPI}id/${id}`;
    return this.http.get(url);
  }
}
