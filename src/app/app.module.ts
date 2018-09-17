import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import {UserComponent} from './components/user/user.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,UserComponent, ProjectsComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
