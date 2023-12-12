import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(text: string, limit: number): string {
    return text.split(' ').slice(0, limit).join(' ');
  }

}
