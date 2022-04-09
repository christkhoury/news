import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import {  HttpClientModule } from '@angular/common/http';
import { ChrisSvc } from 'src/newsSvc';
import { C2Component } from './c2/c2.component';
import { HeaderComponent } from './header/header.component';
import { App2Component } from './app2/app2.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NavbarComponent,
    C2Component,
    HeaderComponent,
    App2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ChrisSvc],
  bootstrap: [AppComponent]
})
export class AppModule {}