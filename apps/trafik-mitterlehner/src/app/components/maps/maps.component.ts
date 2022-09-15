import { Component, Input, OnInit} from '@angular/core';
import { CookieService } from '@trafik/shared/layout';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.sass']
})
export class MapsComponent implements OnInit{  
  @Input() height = 450;
  mapsWidth = 450;
  enableMaps = true;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.cookieService.getSettings().subscribe(s => this.enableMaps = s?.media ?? true);

    this.mapsWidth = window.innerWidth;
    
    window.addEventListener('resize', () => {
      this.mapsWidth = window.innerWidth;
    })
  }
 }
