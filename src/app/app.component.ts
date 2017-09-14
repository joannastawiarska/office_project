import { Component} from '@angular/core';
import {ItemService} from './item.service';
import {ProfileService} from './profile.service';
import {MessageService} from './message.service';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
  providers: [ItemService, ProfileService, MessageService]
})
export class AppComponent { 
  title = 'LostFound Office';
}
