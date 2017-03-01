import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import {routes} from "./app.routes";
import {Createtaskcomponent} from "./createtask/createtask.component"
import {Showtaskcomponent} from "./showtask/showtask.component"
import {} from "./detail.service"
import {DetailService} from "./detail.service";
import {Detail} from "./detail"
import {HttpModule} from "@angular/http"
import {Edittaskcomponent} from "./edittask/edittask.component"
import {FormsModule} from "@angular/forms"

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes), HttpModule, FormsModule ],
  declarations: [ AppComponent , Createtaskcomponent , Showtaskcomponent, Edittaskcomponent ],
  bootstrap:    [ AppComponent ],
  providers : [ DetailService ]
})
export class AppModule { }
