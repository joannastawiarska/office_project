import { Component} from '@angular/core';
import {ItemService} from './item.service';
import {ProfileService} from './profile.service';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
  providers: [ItemService, ProfileService]
})
export class AppComponent { 
  title = 'LostFound Office';
}
