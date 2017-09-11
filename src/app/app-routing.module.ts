import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WishListComponent }   from './wishlist.component';
import { LostListComponent }   from './lostlist.component';
import { FoundListComponent }   from './foundlist.component';
import { ItemDetailComponent }   from './item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/wishlist', pathMatch: 'full' },
  { path: 'wishlist',  component: WishListComponent },
  { path: 'lostlist',  component: LostListComponent },
  { path: 'foundlist',  component: FoundListComponent },
  { path: 'detail/:id', component: ItemDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]
})


export class AppRoutingModule {}
