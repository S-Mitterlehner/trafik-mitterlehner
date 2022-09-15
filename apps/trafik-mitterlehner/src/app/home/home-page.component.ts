import { Component, OnInit } from '@angular/core';
import { OpeningTime, OpeningTimesService } from '@trafik/features/info';
import { News, NewsService } from '@trafik/features/news';
import { TitleService } from '@trafik/shared/layout';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  openingTimes: OpeningTime[] = [];
  closedDates: Date[] = [];
  news: News[] = [];

  constructor(private openingTimesService: OpeningTimesService
            , private newsService: NewsService
            , private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setSubTitle();

    this.openingTimesService.getOpeningTimes().subscribe(d => this.openingTimes = d);
    this.openingTimesService.getClosedDates().subscribe(d => this.closedDates = d);

    this.newsService.getNews(3).subscribe(n => this.news = n);
  }
}

