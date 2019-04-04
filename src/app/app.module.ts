import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListingDialogComponent } from './listing-dialog.component';

const routes: Routes = [
  { path: 'listing', component: ListingDialogComponent }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, ListingDialogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
