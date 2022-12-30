import { Component, OnInit } from '@angular/core';
import { OpeningTime, OpeningTimesService, ServiceOffer, ServiceOfferService } from '@trafik/features/info';
import { News, NewsService } from '@trafik/features/news';
import { TitleService } from '@trafik/shared/layout';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  serviceOffers: ServiceOffer[] = [];
  openingTimes: OpeningTime[] = [];
  closedDates: Date[] = [];
  news: News[] = [];

  constructor(private openingTimesService: OpeningTimesService
            , private newsService: NewsService
            , private serviceOfferService: ServiceOfferService
            , private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setSubTitle();

    this.openingTimesService.getOpeningTimes().subscribe(d => this.openingTimes = d);
    this.openingTimesService.getClosedDates().subscribe(d => this.closedDates = d);
    this.serviceOfferService.getServiceOffers().subscribe(d => this.serviceOffers = d);

    this.newsService.getNews(3).subscribe(n => this.news = n);
  }
}

