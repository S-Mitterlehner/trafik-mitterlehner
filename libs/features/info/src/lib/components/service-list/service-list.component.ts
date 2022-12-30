import { Component, Input } from '@angular/core';
import { ServiceOffer } from '../../models/service-offer.model';

@Component({
  selector: 'info-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.sass']
})
export class ServiceListComponent {
  @Input() items: ServiceOffer[] = [];

  openDetails(item: ServiceOffer) {
    //TODO
  }
}
