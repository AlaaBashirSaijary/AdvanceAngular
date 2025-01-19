import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone:true,

})
export class CustomPipe implements PipeTransform {

  transform(value: number, taxRate: number = 15): number {
    if (!value) return 0;
    return value + (value * taxRate / 100);
  }

}
