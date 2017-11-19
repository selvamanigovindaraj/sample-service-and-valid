import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class EmployeeServiceService {
  private _url:string="https://59f41aa04e78aa00120ef446.mockapi.io/employeeservice";
  constructor(private _http : Http) { }
  getEmployees(){
    return this._http.get(this._url)
      .map((response:Response)=>response.json())
  
}
create(value:object){
  return this._http.post(this._url, value).map((response:Response) => response.json().data)
}

  

}
