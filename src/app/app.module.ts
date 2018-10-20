import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ListCityComponent } from './components/list-city/list-city.component';

import {UserSerice } from './services/user.service';
import { TabsCityComponent } from './components/tabs-city/tabs-city.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCityComponent,
    TabsCityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserSerice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
