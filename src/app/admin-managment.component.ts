import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile } from './profile';
import { ItemService } from './item.service';
import { Item } from './item';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
  selector: 'found-list',
  templateUrl: './admin-managment.component.html',
  styleUrls: ['./admin-managment.component.css'],
  providers: [ItemService, ProfileService, MessageService]
})
export class AdminManagmentComponent implements OnInit {

  errorString: string;
  @Input() item: Item;
  @Input() profile: Profile;
  @Input() message: Message;
  responseStatus: Object = [];
  showDialog = false;
  categories = ['OTHER', 'CLOTHING', 'JEWELRY', 'HOME', 'ELECTRONICS', 'SPORTS'];
  status = ['FOUND', 'LOST'];
  constructor(private _itemService: ItemService, private _profileService: ProfileService, private _messageService: MessageService) {
  }
  ngOnInit() {
    this.item = new Item();
    this.profile = new Profile();
    this.message = new Message();
  }
  createItem() {
    this._itemService.create(this.item).subscribe(
      data => console.log(this.responseStatus = data),
      err => console.log(err),
      () => console.log('Request Completed')
    );
  }
  createProfile() {
    this._profileService.create(this.profile).subscribe(
      data => console.log(this.responseStatus = data),
      err => console.log(err),
      () => console.log('Request Completed')
    );
  }

  returnToOwner() {
    console.log(this.message);
    this._messageService.returnToOwner(this.message).subscribe(
      data => console.log(this.responseStatus = data),
      err => console.log(err),
      () => console.log('Request Completed')
    );
  }

}
