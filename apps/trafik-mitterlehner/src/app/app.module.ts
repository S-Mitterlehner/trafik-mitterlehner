import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@trafik/shared/layout';
import { InfoModule } from '@trafik/features/info';
import { TeamModule } from '@trafik/features/team';
import { NewsModule } from '@trafik/features/news';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomePageComponent } from './home/home-page.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TeamComponent } from './team/team.component';
import { MapsComponent } from './components/maps/maps.component';

@NgModule({
  declarations: [
    AppComponent
    , NavMenuComponent
    , HomePageComponent
    , ImpressumComponent
    , ContactPageComponent
    , TeamComponent
    , MapsComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule,
    LayoutModule,
    InfoModule,
    TeamModule,
    NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
