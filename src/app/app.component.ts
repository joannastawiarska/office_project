import { Component} from '@angular/core';
import {ItemService} from './item/item.service';
import {ProfileService} from './profile/profile.service';
import {MessageService} from './message/message.service';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
  providers: [ItemService, ProfileService, MessageService]
})
export class AppComponent {
  title = 'Lost&Found Office';
}
