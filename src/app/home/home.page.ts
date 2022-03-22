import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ModalViewPage } from '../modal-view/modal-view.page';
import { ItemsService } from '../services/items.service';
import { Storage } from '@ionic/storage-angular';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  listItems$;
  searchForm: FormGroup;
  listItemsSearched = [];
  constructor(
    private itemsService: ItemsService,
    public modalController: ModalController,
    private storage: Storage,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,

  ) {
    this.searchForm = this.formBuilder.group({   userSearch: new FormControl(null)});

  }

 ngOnInit() {
  this.updateItems();
  //this.searchForm.get('userSearch').valueChanges.subscribe( value => this.filterItemsByUserSearch(value));
 }

 logOut(){
   this.storage.remove('isUserLogged');
   this.navCtrl.navigateForward('/login');
 }
 filterItemsByUserSearch(userSearch){
  this.listItems$ =  this.listItems$.filter( item => item.title.includes(userSearch.toLowerCase()));
}

 async openModal(item){
  const modal = await this.modalController.create({
    component: ModalViewPage,
    componentProps: {
      title : item.title,
      visits : item.visits,
      value : item.value,
      id : item.item_id
    }

  });

   // eslint-disable-next-line max-len
   modal.onWillDismiss()
   .then(this.resetSearch.bind(this));

  return await modal.present();
 }
 private updateItems(){
  this.itemsService.getItems().subscribe((items: any) =>{
    this.listItems$ = items.data;
  });
}
private resetSearch(){
  this.searchForm.reset();
  this.updateItems();
}
}
