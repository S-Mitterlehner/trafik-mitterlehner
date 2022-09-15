import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.sass']
})
export class TeamOverviewComponent {
  @Input() employees: Employee[] = [];
}
