import { Injectable } from '@angular/core';
import { DateTimeService } from '@trafik/shared/helper';
import { Observable } from 'rxjs';
import { OpeningTime } from '../models/opening-time.model';

@Injectable({
  providedIn: 'root'
})
export class OpeningTimesService {
  private openingTimes: OpeningTime[] = [
    {
      weekday: "Montag"
      , weekdayId: 1
      , from: new Date(1900, 0, 1, 6, 30, 0)
      , to: new Date(1900, 0, 1, 18, 0, 0)
    },{
      weekday: "Dienstag"
      , weekdayId: 2
      , from: new Date(1900, 0, 1, 6, 30, 0)
      , to: new Date(1900, 0, 1, 18, 0, 0)
    },{
      weekday: "Mittwoch"
      , weekdayId: 3
      , from: new Date(1900, 0, 1, 6, 30, 0)
      , to: new Date(1900, 0, 1, 18, 0, 0)
    },{
      weekday: "Donnerstag"
      , weekdayId: 4
      , from: new Date(1900, 0, 1, 6, 30, 0)
      , to: new Date(1900, 0, 1, 18, 0, 0)
    },{
      weekday: "Freitag"
      , weekdayId: 5
      , from: new Date(1900, 0, 1, 6, 30, 0)
      , to: new Date(1900, 0, 1, 18, 0, 0)
    },{
      weekday: "Samstag"
      , weekdayId: 6
      , from: new Date(1900, 0, 1, 7, 30, 0)
      , to: new Date(1900, 0, 1, 12, 0, 0)
    }
  ];

  constructor(private dateTimeHelper: DateTimeService) { }

  getOpeningTimes(): Observable<OpeningTime[]> {
    return new Observable<OpeningTime[]>(observer => {
      observer.next(this.openingTimes);
    });
  }

  getClosedDates(): Observable<Date[]> {
    return new Observable<Date[]>(observer => {
      //HINWEIS: Monat = Monat - 1 (weil index)
      const list: Date[] = [];
      const currentDate = this.dateTimeHelper.getNow();

      //fixe Feiertage
      list.push(new Date(currentDate.getFullYear(), 0, 1));
      list.push(new Date(currentDate.getFullYear(), 0, 6));
      list.push(new Date(currentDate.getFullYear(), 4, 1));
      list.push(new Date(currentDate.getFullYear(), 7, 15));
      list.push(new Date(currentDate.getFullYear(), 9, 26));
      list.push(new Date(currentDate.getFullYear(), 10, 1));
      list.push(new Date(currentDate.getFullYear(), 11, 15));
      list.push(new Date(currentDate.getFullYear(), 11, 25));
      list.push(new Date(currentDate.getFullYear(), 11, 26));


      // jährlich unterschiedliche
      list.push(new Date(2022, 3, 18));
      list.push(new Date(2022, 4, 26));
      list.push(new Date(2022, 5, 6));
      list.push(new Date(2022, 5, 16));
      list.push(new Date(2023, 3, 10));
      list.push(new Date(2023, 4, 18));
      list.push(new Date(2023, 4, 29));
      list.push(new Date(2023, 5, 8));

      observer.next(list);
    });
  }
}
