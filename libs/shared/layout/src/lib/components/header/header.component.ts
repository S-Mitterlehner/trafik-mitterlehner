import { Component, Input } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent{
  @Input() mode: HeaderModes | string = HeaderModes.Full; 

  toTop(): void {
    window.scrollTo({top: 0})
  }
}


export enum HeaderModes {
  Full = 'full',
  Easy = 'easy'
}
