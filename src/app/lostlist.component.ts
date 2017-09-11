import { Component, OnInit } from '@angular/core';
import {ItemService} from './item.service';
import {Item} from './item';
import { Router }            from '@angular/router';

@Component({
  selector: 'lost-list',
  templateUrl: './lostlist.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ItemService]
})
export class LostListComponent implements OnInit {
    items: Item[];
    errorString: string;
    constructor(private _itemService: ItemService){
    }

    ngOnInit(){
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
