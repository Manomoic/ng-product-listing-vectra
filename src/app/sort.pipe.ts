import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(array: any[], field: string, order: 'asc' | 'desc' = 'asc'): any[] {
    if (!Array.isArray(array)) {
      return array;
    }

    const sortedArray = array.sort((a, b) => {
      if (a[field] < b[field]) {
        return order === 'asc' ? -1 : 1;
      } else if (a[field] > b[field]) {
        return order === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });

    return sortedArray;
  }
}
