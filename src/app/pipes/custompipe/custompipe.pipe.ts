import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  // transform(value: number, ...args: unknown[]): unknown {
  //   return value;
  // }

  //Calcuation
  //  transform(value: number, ...args: unknown[]): unknown {
  //   return value * 2;
  // }

  //passing paramenter
  transform(value: number, ...args: number[]): unknown {
    const[rate] = args;
    return value * rate;
  }

}
