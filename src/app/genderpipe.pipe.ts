import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderpipe'
})
export class GenderpipePipe implements PipeTransform {

  transform(datas: any, employee: any): any {
    
    return datas.filter(item => item.gender.indexOf(employee) !== -1);
  }

}
