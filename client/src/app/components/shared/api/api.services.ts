import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiServices {

  constructor(private http: HttpClient) { }

  registerUser(userData) {
    return this.http.post('/user/register', userData);
  }

  loginUser(userData) {
    return this.http.post('/user/login', userData);
  }

  getAllUsers() {
    return this.http.get('/user/all-users');
  }

  updateUserRoles(data) {
    return this.http.post('/user/add-user-role', data);
  }
}