import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamOverviewComponent } from './components/team-overview/team-overview.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TeamOverviewComponent
  ],
  exports: [
    TeamOverviewComponent
  ],
})
export class TeamModule {}
