import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  getNow(): Date {
    return new Date();
  }

  isBetween(checkDate: Date, from: Date, to: Date): boolean {
    const checkNum = this.getTimeNumber(checkDate);
    const fromNum = this.getTimeNumber(from);
    const toNum = this.getTimeNumber(to);

    return  fromNum <= checkNum && checkNum <= toNum;
  }

  private getTimeNumber(date: Date): number {
    const hours = date.getHours();
    const min = ('00' + date.getMinutes()).slice(-2);

    return parseInt(hours + min);
  }
}
