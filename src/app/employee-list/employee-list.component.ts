import { Component, OnInit } from '@angular/core';
import{EmployeeServiceService} from '../employee-service.service';
import{ Router} from '@angular/router';
import { GenderpipePipe} from '../genderpipe.pipe'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee=[];
  constructor(private _employeeService:EmployeeServiceService ) {}

  ngOnInit() {
   this._employeeService.getEmployees()
    .subscribe(resEmployeeData=>this.employee=resEmployeeData)
  }

}
