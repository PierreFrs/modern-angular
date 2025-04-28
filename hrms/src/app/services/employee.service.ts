import {Injectable} from '@angular/core';
import {Employee} from '../infrastructure/types/employee';
import {Observable, of} from 'rxjs';

@Injectable()
export class EmployeeService {
  public getEmployees(): Observable<Employee[]> {
    const employee1: Employee = {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@evilcorp.com",
      level: "Lead",
      position: "Manager",
      role: "employee",
      profilePicture: "",
      isAvailable: true,
      id: 1
    };
    const employee2: Employee = {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@evilcorp.com",
      level: "Junior",
      position: "QA",
      role: "employee",
      profilePicture: "",
      isAvailable: true,
      id: 2
    };
    const employeeArray = [employee1, employee2]
    return of(employeeArray);
  };

  public getEmployee(id: number) {
    return of({} as Employee);
  }
}
