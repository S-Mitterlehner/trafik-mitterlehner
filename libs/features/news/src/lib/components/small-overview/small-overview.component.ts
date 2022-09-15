import { Component, Input, ViewChild } from '@angular/core';
import { PopupComponent } from '@trafik/shared/layout';
import { News } from '../../models/news.model';

@Component({
  selector: 'news-small-overview',
  templateUrl: './small-overview.component.html',
  styleUrls: ['./small-overview.component.sass']
})
export class SmallOverviewComponent {
  @ViewChild('popup') popupRef: PopupComponent | undefined;
  @Input() news: News[] = [];
  textLimit = 430;
  popupNews: News | undefined;

  getDateString(date: Date): string {
    const day = ('00' + date.getDate()).slice(-2);
    const month = ('00' + (date.getMonth() + 1)).slice(-2);
    const year = ('0000' + date.getFullYear()).slice(-4);

    return `${day}.${month}.${year}`;
  }

  getText(text: string): string {
    if(text.length <= this.textLimit) {
      return text;
    }
    return text.slice(0, this.textLimit) + '...'
  }

  openPopup(n: News): void {
    if(this.popupRef !== undefined) {
      this.popupNews = n;
      this.popupRef.show();
    }
  }
}

