import { Component, Input } from '@angular/core';

@Component({
  selector: 'layout-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent {
  @Input() showTopCloseButton = true;
  @Input() showBottomCloseButton = false;
  isShown = false;

  hide(): void {
    this.isShown = false;
  }

  show(): void {
    this.isShown = true;
  }
}
