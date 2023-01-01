import { Component, Input, ViewChild } from '@angular/core';
import { ServiceOffer } from '../../models/service-offer.model';
import { PopupComponent } from '@trafik/shared/layout';

@Component({
  selector: 'info-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.sass']
})
export class ServiceListComponent {
  @ViewChild("popup") popup!: PopupComponent;
  @Input() items: ServiceOffer[] = [];
  selectedItem: ServiceOffer | undefined;

  openDetails(item: ServiceOffer) {
    this.selectedItem = item;
    this.popup.show();
  }

  closeDetails() {
    this.selectedItem = undefined;
    this.popup.hide();
  }
}
