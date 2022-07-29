import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, maxLength = 50): string {
    if (value.length <= maxLength) {
      return value;
    }
    const cutPos = value.lastIndexOf(' ',maxLength)
    return (cutPos > 0 ? value.substring(0, cutPos) : value.substring(0, maxLength) ) + ' …';
  }
}
