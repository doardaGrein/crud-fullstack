import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  login(email: string, password: string): Observable<boolean> {
    const loginData = { email, password };
    window.sessionStorage.setItem("userdetails", JSON.stringify(loginData));
    return this.http.post<boolean>(`${this.apiUrl}/login`, loginData);
  }

  changePassword(email: string, oldPassword: string, newPassword: string): Observable<boolean> {
    const changePasswordRequest = { email, oldPassword, newPassword };
    return this.http.post<boolean>(`${this.apiUrl}/users/change-password`, changePasswordRequest);
  }
  getUser(): Promise<string> {
    return new Promise((resolve, reject) => {
        const userName = '';
        resolve(userName);
      }
    );
  }
}
