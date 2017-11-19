import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
 
import { EmployeeServiceService} from './employee-service.service'


import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetialsComponent } from './employee-detials/employee-detials.component';
import { CreateEmployeeComponent } from './create-employee.component';
import { GenderpipePipe } from './genderpipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    EmployeeListComponent,
    EmployeeDetialsComponent,
    CreateEmployeeComponent,
    GenderpipePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'employee-list/employee-list.component', component:EmployeeListComponent},
      {path:'employee-detials/employee-detials.component',component:EmployeeDetialsComponent},
      {path:'newEmployee' ,component:CreateEmployeeComponent}
    ])
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
