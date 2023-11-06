import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(array: any[], searchText: string, fields: string[]): any[] {
    if (!Array.isArray(array) || !searchText) {
      return array;
    }

    const searchRegex = new RegExp(searchText, 'i');
    return array.filter((item) =>
      fields.some((field) => searchRegex.test(item[field]))
    );
  }
}
