import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }
  signIn(user, password){
    const formData = new FormData();
    formData.append('user', user);
    formData.append('pass', password);
    return this.http.post('https://optimizaprocess.net/test/', formData);
}
}
