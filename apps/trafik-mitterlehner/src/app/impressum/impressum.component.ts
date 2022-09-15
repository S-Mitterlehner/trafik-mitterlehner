import { Component, OnInit } from '@angular/core';
import { TitleService } from '@trafik/shared/layout';

@Component({
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.sass']
})
export class ImpressumComponent implements OnInit { 

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setSubTitle('Impressum');
  }
}
