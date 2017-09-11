import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { WishListComponent }    from './wishlist.component';
import { LostListComponent }    from './lostlist.component';
import { FoundListComponent }    from './foundlist.component';
import { ItemDetailComponent }    from './item-detail.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, WishListComponent, ItemDetailComponent, LostListComponent, FoundListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
