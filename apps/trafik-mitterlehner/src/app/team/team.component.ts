import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '@trafik/features/team';
import { TitleService } from '@trafik/shared/layout';

@Component({
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService
            , private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setSubTitle('Team');
    this.employeeService.getEmployees().subscribe(e => this.employees = e);
  }
}
