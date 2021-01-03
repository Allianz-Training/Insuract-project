import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_types/user';

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'text' });
  }

  getUser(username: string): Observable<any> {
    return this.http.get(API_URL + 'user/' + username);
  }
}
