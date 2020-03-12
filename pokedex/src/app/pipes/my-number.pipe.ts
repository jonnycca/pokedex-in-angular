import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myNumber'
})
export class MyNumberPipe implements PipeTransform {

  transform(value: number): string {
    return  ('000' + value).slice(-3); //logica para formatar o numero com 3 digitos
  }

}
