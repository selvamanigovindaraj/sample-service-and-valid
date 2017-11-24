import { Component, OnInit,Input } from '@angular/core';
import{EmployeeServiceService} from './employee-service.service';
import{ Router} from '@angular/router';
import { Http,Response } from '@angular/http';
import { Validators } from '@angular/forms';
@Component({
    selector: 'create-employee',
    templateUrl: 'create-employee.component.html'
})

export class CreateEmployeeComponent implements OnInit {
   imgfile:any;
    constructor(private _employeeService:EmployeeServiceService) { }
    response: string;
    ngOnInit() { }
    onRegister(value: object) {
       value.add(this.imgfile)
        console.log(value)
        // this._employeeService.create(value)
        // .subscribe( responseData => this.response = responseData)
        // value.reset();
        
        //   .then(hero => {
        //     this.heroes.push(hero);
        //     this.selectedHero = null;
        //   }
        
      }
      uploadimg(imageinput:any){
        this.imgfile= imageinput.target.files;
      }
    
      
}