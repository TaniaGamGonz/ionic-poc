import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  listItems$;
  constructor(
    private itemsService: ItemsService,
  ) {}

 ngOnInit() {
  this.listItems$ = this.itemsService.getItems().subscribe((items: any) =>{
    this.listItems$ = items.data;
    console.log(this.listItems$);
  });
 }
}
