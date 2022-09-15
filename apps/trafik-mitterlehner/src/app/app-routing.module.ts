import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home/home-page.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, data: { pageMode: 'LANDING' } }
  , { path: 'impressum', component: ImpressumComponent }
  , { path: 'contact', component: ContactPageComponent }
  , { path: 'team', component: TeamComponent }
]

const options: ExtraOptions = {
  anchorScrolling: 'enabled',
  useHash: false,
  scrollPositionRestoration: 'top'
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, options)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
