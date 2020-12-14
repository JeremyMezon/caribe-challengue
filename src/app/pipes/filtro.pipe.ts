import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const nombreNegocio = [];
    for(const item of value){
      if(item.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        console.log(item);
        nombreNegocio.push(item);
        
      }
    }
    return nombreNegocio;
  }

}
