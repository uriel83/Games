import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

  createUser(fName: string, lName: string, email: string, password: string): Observable<any> {
    console.log("fName",fName);
    
    return this.http.post(`${environment.baseUrl}${environment.users}`, {
      email : email,
      password : password,
      first_name : fName,
      last_name : lName
    });
  }

  UserLogin(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.baseUrl}${environment.userLogin}`, {
      email: email,
      password: password,
    });
  }
}
