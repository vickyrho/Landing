import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './scripts/components/home.component';
import {ProfileComponent} from './scripts/components/profile.component';
import {RegisterComponent} from './scripts/components/register.component';
import {LoginComponent} from './scripts/components/login.component';
import {SponsorsComponent} from './scripts/components/sponsors.component';
import {InitiativesComponent} from './scripts/components/initiatives.components';
import {KarnivalComponent} from './scripts/components/karnival.component';
import {XceedComponent} from './scripts/components/xceed.component';
import {GLComponent} from './scripts/components/gl.component';
import {WorkshopsComponent} from './scripts/components/workshops.component';
import {EventsComponent} from './scripts/components/events.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'workshops',
    component: WorkshopsComponent
  },
  {
    path: 'gl',
    component: GLComponent
  },
  {
    path: 'xceed',
    component: XceedComponent
  },
  {
    path: 'karnival',
    component: KarnivalComponent
  },
  {
    path: 'initiatives',
    component: InitiativesComponent
  },
  {
    path: 'sponsors',
    component: SponsorsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AppRoutingModule { }
