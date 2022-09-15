import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees() : Observable<Employee[]> {
    return new Observable<Employee[]>(observer => {
      const list: Employee[] = [
        {
          id: 1,
          name: 'Andrea',
          imagePath: "assets/employees/andrea.jpg"
        },
        {
          id: 2,
          name: 'Karin',
          imagePath: "assets/employees/karin.jpg"
        },
        {
          id: 3,
          name: 'Michi',
          imagePath: "assets/employees/michi.jpg"
        },
        {
          id: 4,
          name: 'Ulli',
          imagePath: "assets/employees/ulli.jpg"
        },
        {
          id: 5,
          name: 'Maria',
          imagePath: "assets/employees/maria.jpg"
        }, 
        {
          id: 6,
          name: 'Manfred',
          imagePath: 'assets/employees/manfred.jpg'
        }
      ];

      observer.next(list);
    })
  }
}
