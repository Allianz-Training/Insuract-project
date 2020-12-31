import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Insurance } from './Insurance';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getAllproduct = 'http://localhost:8080/product/';

  constructor(private http: HttpClient) {}

  public getInsurance(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.getAllproduct);
  }
}
