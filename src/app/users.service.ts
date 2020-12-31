import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = "http://localhost:8080/"

  constructor(private http:HttpClient) { }

  public validateUser(user:string){
    return this.http.post(`${this.baseUrl}auth/validate-user`,{"username":user},{observe : 'response'}).toPromise()
  }
  public validateEmail(email:string){
    return this.http.post(`${this.baseUrl}auth/validate-email`,{"username":email},{observe : 'response'}).toPromise()
  }
  public validateCitizenId(citizenId:string){
    return this.http.post(`${this.baseUrl}auth/validate-citizen-id`,{"username":citizenId},{observe : 'response'}).toPromise()
  }
}
