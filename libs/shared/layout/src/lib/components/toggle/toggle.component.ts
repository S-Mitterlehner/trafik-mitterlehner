import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'layout-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.sass']
})
export class ToggleComponent {
  @Input() label = '';
  @Input() name = '';
  @Input() disabled = false;
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  changeValue(e: any) {
    if(e.target.checked !== undefined && !this.disabled) {
      this.checked = e.target.checked;
      this.checkedChange.emit(this.checked);
    }
  }
}
