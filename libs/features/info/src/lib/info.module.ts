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
import { ServiceListComponent } from './components/service-list/service-list.component';
import { LayoutModule } from '@trafik/shared/layout';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LayoutModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    OpeningTimesComponent,
    CurrentOpeningInfoComponent,
    ContactComponent,
    ServiceListComponent,
    ServiceDetailComponent
  ],
  exports: [
    OpeningTimesComponent,
    CurrentOpeningInfoComponent,
    ContactComponent,
    ServiceListComponent
  ],
})
export class InfoModule {}
