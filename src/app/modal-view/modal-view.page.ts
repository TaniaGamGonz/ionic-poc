import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.page.html',
  styleUrls: ['./modal-view.page.scss'],
})
export class ModalViewPage implements OnInit {
  @Input() title: string;
  @Input() visits: string;
  @Input() value: string;
  @Input() id: string;
  constructor(
    private modalController: ModalController,
    private itemsService: ItemsService
  ) { }

  addVisit(itemId){
   return this.itemsService.addVisitToItem(itemId);
  }
  closeModal() {
    this.modalController.dismiss();
  }
  ngOnInit() {
    this.addVisit(this.id).subscribe();
  }
}
