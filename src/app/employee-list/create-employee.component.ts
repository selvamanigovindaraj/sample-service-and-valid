import { Component, OnInit } from '@angular/core';
import{EmployeeServiceService} from '../employee-service.service';
import{ Router} from '@angular/router'

@Component({
    selector: 'create-employee',
    templateUrl: 'create-employee.component.html'
})

export class CreateEmployeeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}