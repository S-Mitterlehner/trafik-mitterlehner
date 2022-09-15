import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopupComponent } from './components/popup/popup.component';
import { CookieWarnComponent } from './components/cookie-warn/cookie-warn.component';
import { FormsModule } from '@angular/forms';

export const layoutRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PopupComponent,
    CookieWarnComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    CookieWarnComponent
  ]
})
export class LayoutModule {}
