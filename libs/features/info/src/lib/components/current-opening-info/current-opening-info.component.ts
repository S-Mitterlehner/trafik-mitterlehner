import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { OpeningTime } from '../../models/opening-time.model';
import { DateTimeService } from '@trafik/shared/helper';
import * as moment from 'moment';

const CLOSED_STATUS: Status = {
  id: "CLOSED",
  cssClass: 'closed',
  text: 'Geschlossen',
  nextText: 'Öffnet in'
}
const OPEN_STATUS: Status = {
  id: "OPEN",
  cssClass: 'opened',
  text: 'Geöffnet',
  nextText: 'Schließt in'
}

//TODO: Refactor
@Component({
  selector: 'info-current-opening-info',
  templateUrl: './current-opening-info.component.html',
  styleUrls: ['./current-opening-info.component.sass']
})
export class CurrentOpeningInfoComponent implements OnInit, OnDestroy {
  @Input() times: OpeningTime[] = [];
  @Input() closedDates: Date[] = [];
  currentStatus: Status | undefined;
  nextDifference: Next | undefined;
  intervalId: number | undefined;
  
  constructor(private dateTimeService: DateTimeService) { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.updateStatus(), 1000);  
    this.updateStatus();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  updateStatus(): void {
    const now = this.dateTimeService.getNow();

    if(this.isClosedDate(now)){
        this.setClosed(now);
        return;
      }
    
    const openingTime = this.times.find(t => 
      t.weekdayId === now.getDay()
      && this.dateTimeService.isBetween(now, t.from, t.to));

    if(openingTime !== undefined) {
      this.currentStatus = OPEN_STATUS;
      this.updateNextDate(
        new Date(now.getFullYear()
        , now.getMonth()
        , now.getDate()
        , openingTime.to.getHours()
        , openingTime.to.getMinutes()));
    } else {
      this.setClosed(now);
    }
  }

  setClosed(now: Date): void {
    this.currentStatus = CLOSED_STATUS;
    const nextOpening = this.getNextOpeningHour(now);

    if(nextOpening !== null){
      this.updateNextDate(nextOpening.date);
    }
  }

  getNextOpeningHour(now: Date): {time: OpeningTime, date: Date} | null {
    let found = false;
    let d = moment(now);
    do {
      d = d.add(1, 'day');      

      if(this.isClosedDate(d.toDate())) {
        continue;
      }

      const dayOfWeek = d.day()
      const openingHour = this.times.find(h => h.weekdayId == dayOfWeek);

      if(openingHour === undefined) {
        continue;
      }
      
      const resultDate = new Date(d.year(), d.month(), d.date(), openingHour.from.getHours(), openingHour.from.getMinutes())

      found = true;
      return {
        time: openingHour,
        date: resultDate
      } 
    }
    while(!found)

    return null;
  }

  updateNextDate(nextDate: Date): void {
    const now = moment(this.dateTimeService.getNow());
    const nextMoment = moment(nextDate);
    const diffDate = new Date(nextMoment.diff(now));
    
    this.nextDifference = {
      days: ('00' + (diffDate.getDate() - 1)).slice(-2),
      hours: ('00' + (diffDate.getHours() - 1)).slice(-2),
      minutes: ('00' + diffDate.getMinutes()).slice(-2),
      seconds: ('00' + diffDate.getSeconds()).slice(-2),
    }
  }

  isClosedDate(date: Date) : boolean {
    return this.closedDates.find(d => 
      d.getFullYear() === date.getFullYear() &&
      d.getMonth() === date.getMonth() &&
      d.getDate() === date.getDate()) !== undefined
  }
}

interface Status {
  id: string;
  text: string; 
  cssClass: string; 
  nextText: string; 
}

interface Next {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}