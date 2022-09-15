import { Component, OnInit } from '@angular/core';
import { CookieSettings } from '../../models/cookie-settings.model';
import { CookieService } from '../../services/cookie.service';

@Component({
  selector: 'layout-cookie-warn',
  templateUrl: './cookie-warn.component.html',
  styleUrls: ['./cookie-warn.component.sass']
})
export class CookieWarnComponent implements OnInit{
  settings: CookieSettings = {
    analysis: true,
    media: true
  }
  isShown = false;

  constructor(private service: CookieService) { }

  ngOnInit(): void {
    this.service.getSettings()
      .subscribe(s => {
        if(s !== null) {
          this.settings = s;
          this.isShown = false;
        } else {
          this.isShown = true;
        }
      })
  }

  hide(): void {
    this.isShown = false;
  }
  
  saveSelection(): void {
    this.service.saveSettings(this.settings);
    this.hide();
  }

  saveAll(): void {
    this.settings.analysis = true;
    this.settings.media = true;
    this.saveSelection();
  }

}