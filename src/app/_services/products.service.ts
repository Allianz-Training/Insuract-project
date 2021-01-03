import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Insurance } from '../_interfaces/Insurance';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = 'http://localhost:8080/product/';

  // convert number to product range to communicate with backend
  range!: string;

  constructor(private http: HttpClient) {}

  public getInsurance(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.baseUrl);
  }

  public getInsuranceById(id: any): Observable<any> {
    const url = `${this.baseUrl}id/${id}`;
    return this.http.get(url);
  }

  public filterMinInsurance(category: string, price: number): Observable<any> {
    if (price < 1500) {
      this.range = 'Low';
    } else if (price > 1500 && price < 3000) {
      this.range = 'Mid';
    } else {
      this.range = 'High';
    }

    console.log(category);
    console.log(this.range);

    const url = `${this.baseUrl}${category}&${this.range}`;
    return this.http.get(url);
  }
}
