import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServiceOffer } from '../../models/service-offer.model';

@Component({
  selector: 'info-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.sass']
})
export class ServiceDetailComponent {
  @Input() item!: ServiceOffer;
  @Output() closeRequested = new EventEmitter<any>();
}
