import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http: HttpClient
  ) { }
  getItems(){
   return this.http.get('https://optimizaprocess.net/test/');
  }
}
