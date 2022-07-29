import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length <= 50) {
      return value;
    }
    const cutPos = value.lastIndexOf(' ',50)
    return (cutPos > 0 ? value.substring(0, cutPos) : value.substring(0, 50) ) + ' …';
  }
}
