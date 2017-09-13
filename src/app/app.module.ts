import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WishListComponent } from './wishlist.component';
import { LostListComponent } from './lostlist.component';
import { FoundListComponent } from './foundlist.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemFilterPipe } from './item-filter.pipe';
import { ItemOrderPipe} from './item-order.pipe'

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, FormsModule],
  declarations: [AppComponent, ItemFilterPipe,ItemOrderPipe, WishListComponent,
     ItemDetailComponent, LostListComponent, FoundListComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
