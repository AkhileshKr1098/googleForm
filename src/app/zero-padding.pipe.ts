import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
  name: 'zeroPadding'
})
export class ZeroPaddingPipe implements PipeTransform {


  transform(value: number, totalLength: number): string {
    return value.toString().padStart(totalLength, '0');
  }
  
}
