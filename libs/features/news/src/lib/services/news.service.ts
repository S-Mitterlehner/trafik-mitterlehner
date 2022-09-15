import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(top: number = -1): Observable<News[]> {
    return new Observable<News[]>(observer => {
    this.http.get<News[]>('assets/news/data.json')
      .subscribe(n => {
        n.forEach(i => {
          i.dateTime = new Date(i.dateTime);
        });
        const result = n.sort((i, i2) => {
          return i.dateTime.getTime() - i2.dateTime.getTime();
        });

        if(top > 0){
          observer.next(result.slice(0, top));
          return;
        }
        observer.next(result);
      });
    });
  }
}
