import { Component, Input } from '@angular/core';
import { News } from '../../models/news.model';

@Component({
  selector: 'news-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['../small-overview/small-overview.component.sass', './detail-view.component.sass']
})
export class DetailViewComponent {
  @Input() news: News | undefined;

  getDateString(date: Date): string {
    const day = ('00' + date.getDate()).slice(-2);
    const month = ('00' + (date.getMonth() + 1)).slice(-2);
    const year = ('0000' + date.getFullYear()).slice(-4);

    return `${day}.${month}.${year}`;
  }
}
