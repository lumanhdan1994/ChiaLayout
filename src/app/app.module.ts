import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaitapChialayoutModule } from './baitap-chialayout/baitap-chialayout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaitapChialayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
