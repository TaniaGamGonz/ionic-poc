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
  addVisitToItem(itemId: string){
    const formData = new FormData();
    formData.append('item_id', itemId);
    return this.http.post('https://optimizaprocess.net/test/?o=update_visits', formData);
  }
}
