import { Component, OnInit } from '@angular/core';
import { OpeningTime, OpeningTimesService } from '@trafik/features/info';
import { TitleService } from '@trafik/shared/layout';

@Component({
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.sass']
})
export class ContactPageComponent implements OnInit{
  openingTimes: OpeningTime[] = [];
  closedDates: Date[] = [];

  constructor(private openingTimesService: OpeningTimesService
            , private title: TitleService) { }

  ngOnInit(): void {
    this.title.setSubTitle('Kontakt');

    this.openingTimesService.getOpeningTimes().subscribe(d => this.openingTimes = d);
    this.openingTimesService.getClosedDates().subscribe(d => this.closedDates = d);
  }
 }
