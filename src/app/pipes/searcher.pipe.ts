import { Pipe, PipeTransform } from '@angular/core';

import { Card } from '../models';

@Pipe({
  name: 'searcher',
})
export class SearcherPipe implements PipeTransform {
  transform(value: Card[], searchText: string): Card[] {
    const text = typeof searchText === 'string' ? searchText.toUpperCase() : '';
    const results: Card[] = value.filter(({ name }) => name.includes(text));

    return results;
  }
}
