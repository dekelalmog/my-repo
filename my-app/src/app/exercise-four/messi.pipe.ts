import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'messi'})
export class messiPipe implements PipeTransform {
  transform(text: string): string {
   return text.includes('messi') ? `${text} you know messi is the goat` : text;
  }
}