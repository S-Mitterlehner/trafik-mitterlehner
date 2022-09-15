import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningTimesComponent } from './components/opening-times/opening-times.component';
import { CurrentOpeningInfoComponent } from './components/current-opening-info/current-opening-info.component';
import { ContactComponent } from './components/contact/contact.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    OpeningTimesComponent,
    CurrentOpeningInfoComponent,
    ContactComponent
  ],
  exports: [
    OpeningTimesComponent,
    CurrentOpeningInfoComponent,
    ContactComponent
  ],
})
export class InfoModule {}
