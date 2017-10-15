import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './scripts/app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './scripts/components/home.component';
import {EventsComponent} from './scripts/components/events.component';
import {WorkshopsComponent} from './scripts/components/workshops.component';
import {InitiativesComponent} from './scripts/components/initiatives.components';
import {GLComponent} from './scripts/components/gl.component';
import {XceedComponent} from './scripts/components/xceed.component';
import {KarnivalComponent} from './scripts/components/karnival.component';
import {SponsorsComponent} from './scripts/components/sponsors.component';
import {LoginComponent} from './scripts/components/login.component';
import {RegisterComponent} from './scripts/components/register.component';
import {ProfileComponent} from './scripts/components/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    WorkshopsComponent,
    InitiativesComponent,
    GLComponent,
    XceedComponent,
    KarnivalComponent,
    SponsorsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
