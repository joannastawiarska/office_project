import { Component, OnInit, Injectable } from '@angular/core';
import {ItemService} from './item.service';
import {Item} from './item';

@Component({
  selector: 'lost-list',
  templateUrl: './lostlist.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ItemService]
})
@Injectable()
export class LostListComponent implements OnInit {
    LOST_STATUS = 'LOST';
    items: Item[];
    errorString: string;
    filter: Item = new Item();
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

