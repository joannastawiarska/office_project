import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WishListComponent } from './wishlist.component';
import { LostListComponent } from './lostlist.component';
import { FoundListComponent } from './foundlist.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemFilterPipe } from './item-filter.pipe';
import { ItemOrderPipe} from './item-order.pipe';
import { AdminManagmentComponent } from './admin-managment.component';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, FormsModule, Ng2Bs3ModalModule],
  declarations: [AppComponent, ItemFilterPipe, ItemOrderPipe, WishListComponent,
     ItemDetailComponent, LostListComponent, FoundListComponent, AdminManagmentComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
