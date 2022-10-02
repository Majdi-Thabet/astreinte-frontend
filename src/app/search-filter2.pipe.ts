import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter2'
})
export class SearchFilter2Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
