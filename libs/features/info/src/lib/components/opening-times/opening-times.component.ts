import { Component, Input } from '@angular/core';
import { OpeningTime } from '../../models/opening-time.model';

@Component({
  selector: 'info-opening-times',
  templateUrl: './opening-times.component.html',
  styleUrls: ['./opening-times.component.sass']
})
export class OpeningTimesComponent {
  @Input() times: OpeningTime[] = [];

  getTimeString(dt: Date) : string {
    const hour = ('00' + dt.getHours()).slice(-2);
    const minutes = ('00' + dt.getMinutes()).slice(-2);

    return `${hour}:${minutes}`;
  }
}
