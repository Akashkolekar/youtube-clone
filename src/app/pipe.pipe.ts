import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value:any,search:any){
    return value.filter(res=>{
      return res.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    })
  }

}
