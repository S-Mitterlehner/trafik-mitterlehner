import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SmallOverviewComponent } from './components/small-overview/small-overview.component';

import { LayoutModule } from '@trafik/shared/layout';
import { DetailViewComponent } from './components/detail-view/detail-view.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutModule
  ],
  declarations: [
    SmallOverviewComponent,
    DetailViewComponent
  ],
  exports: [
    SmallOverviewComponent,
    DetailViewComponent
  ],
})
export class NewsModule {}
