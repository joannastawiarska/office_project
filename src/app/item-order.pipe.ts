import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item';

@Pipe({
  name: 'orderBy'
})
export class ItemOrderPipe implements PipeTransform {
  transform(array: Array<Item>, orderParam: string): Item[] {
    if(orderParam === 'date'){
    array.sort((a: Item, b: Item) => {
      if (a.dateOfAdded < b.dateOfAdded) {
        return 1;
      } else if (a.dateOfAdded > b.dateOfAdded) {
        return -1;
      } else {
        return 0;
      }
    });
    }else if(orderParam === 'name'){
        array.sort((a: Item, b: Item) => {
            if (a.name < b.name) {
              return -1;
            } else if (a.name > b.name) {
              return 1;
            } else {
              return 0;
            }
        });
     }
    return array;
  }
}