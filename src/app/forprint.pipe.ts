import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forprint'
})
export class ForprintPipe implements PipeTransform {

 
  transform(value: number, totalLength: number): string {
    return value.toString().padStart(totalLength, '0');
  }
}
