import { Component, OnInit, Input } from '@angular/core';
import {ProfileService} from './profile.service';
import {Profile} from './profile';
import {ItemService} from './item.service';
import {Item} from './item';
import { Router }            from '@angular/router';

@Component({
  selector: 'found-list',
  templateUrl: './admin-managment.component.html',
  styleUrls: ['./admin-managment.component.css'],
  providers: [ItemService, ProfileService]
})
export class AdminManagmentComponent implements OnInit {

    errorString: string;
    @Input() item:Item;
    @Input() profile:Profile;
    responseStatus:Object= [];
    showDialog = false;
    constructor(private _itemService: ItemService, private _profileService: ProfileService){
    }
    ngOnInit(){
      this.item = new Item();
      this.profile = new Profile();
    }
    createItem(){
      console.log(this.item);
      this._itemService.create(this.item).subscribe(
        data => console.log(this.responseStatus = data),
        err => console.log(err),
        () => console.log('Request Completed')
     );
    }
    createProfile(){
      console.log(this.profile);
      this._profileService.create(this.profile).subscribe(
        data => console.log(this.responseStatus = data),
        err => console.log(err),
        () => console.log('Request Completed')
     );
    }
}
