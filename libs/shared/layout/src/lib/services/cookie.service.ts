import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieSettings } from '../models/cookie-settings.model';

const COOKIE_SETTINGS = 'COOKIE_SETTINGS';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  getSettings(): Observable<CookieSettings|null> {
    return new Observable<CookieSettings|null>(observer => {
      const txt = localStorage.getItem(COOKIE_SETTINGS);
      if(txt === null){
        observer.next(null);
        return;
      }
      const settings = JSON.parse(txt);
      observer.next(settings);
    })
  }

  saveSettings(settings: CookieSettings): void {
    const txt = JSON.stringify(settings);
    localStorage.setItem(COOKIE_SETTINGS, txt);
  }
}
