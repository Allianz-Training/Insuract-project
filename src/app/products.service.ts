import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Insurance } from './Insurance';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = 'http://localhost:8080/product/';

  constructor(private http: HttpClient) {}

  public getInsurance(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.baseUrl);
  }

  public getInsuranceById(id: any): Observable<any> {
    const url = `${this.baseUrl}id/${id}`;
    return this.http.get(url);
  }

  public filterMinInsurance(category: string, price: number): Observable<any> {
    const url = `${this.baseUrl}product/${category}`
  }
}
