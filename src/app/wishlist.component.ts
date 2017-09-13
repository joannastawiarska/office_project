import { Component, OnInit, Input } from '@angular/core';
import {ItemService} from './item.service';
import {Item} from './item';
import { Router }            from '@angular/router';

@Component({
  selector: 'wish-list',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ItemService]
})
export class WishListComponent implements OnInit {
    items: Item[];
    errorString: string;
    @Input() item:Item;
    responseStatus:Object= [];
    constructor(private _itemService: ItemService){
    }

    ngOnInit(){
      this.item = new Item();
    this.getItems();
    }
    getItems(){
      this._itemService.getItems()
                      .subscribe(
                      items => this.items = items,
                      error => this.errorString = <any>error
                      );
    }
}
