import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MapModule,
    StoreModule.forRoot({

    }, )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
