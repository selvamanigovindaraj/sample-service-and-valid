import { Component, OnInit } from '@angular/core';
import{EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-employee-detials',
  templateUrl: './employee-detials.component.html',
  styleUrls: ['./employee-detials.component.css']
})
export class EmployeeDetialsComponent implements OnInit {
  employee=[];
  constructor(private _employeeService:EmployeeServiceService ) {}

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(resEmployeeData=>this.employee=resEmployeeData)
  }

}
