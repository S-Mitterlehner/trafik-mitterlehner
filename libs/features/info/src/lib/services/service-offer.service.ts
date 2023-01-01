import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServiceOffer } from '../models/service-offer.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceOfferService {
  private serviceOffers: ServiceOffer[] = [
    {
      name: "Tabak",
      hasAdditionalInfo: true,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      imagePath: "assets/tabak.jpg"
    }, {
      name: "Zeitungen & Zeitschriften",
      hasAdditionalInfo: true,
      description: "TODO",
      imagePath: undefined
    }, {
      name: "Bilets",
      hasAdditionalInfo: false,
      description: "TODO",
      imagePath: undefined
    }, {
      name: "Ö-Ticket",
      hasAdditionalInfo: true,
      description: "TODO",
      imagePath: undefined
    }, {
      name: "IQOS",
      hasAdditionalInfo: true,
      description: "TODO",
      imagePath: undefined
    }, {
      name: "Skruf",
      hasAdditionalInfo: true,
      description: "TODO",
      imagePath: undefined
    }, {
      name: "E-Zigaretten & Zubehör",
      hasAdditionalInfo: true,
      description: "TODO",
      imagePath: undefined
    }, {
      name: "Vignette",
      hasAdditionalInfo: true,
      description: "Sowohl Digital, als auch Analog",
      imagePath: undefined
    }, {
      name: "Lotto, Toto, Brieflos & Rubbellose",
      hasAdditionalInfo: false,
      description: undefined,
      imagePath: undefined
    }, {
      name: "und vieles mehr...",
      hasAdditionalInfo: false,
      description: undefined,
      imagePath: undefined
    }
  ];


  getServiceOffers(): Observable<ServiceOffer[]> {
    return of(this.serviceOffers);
  }
}
