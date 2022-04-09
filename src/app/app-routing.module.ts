import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App2Component } from './app2/app2.component';
import { TableComponent } from './table/table.component';
import { C2Component} from './c2/c2.component';


const routes: Routes = [
  {path: 'GHI', component :   App2Component},
{path : 'ABC' , component : TableComponent},
{path : 'DEF' , component : C2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
