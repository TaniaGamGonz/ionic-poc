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
    const body = {"user": user, "pass": password};
    return this.http.post('https://optimizaprocess.net/test/', body);
  }
}
