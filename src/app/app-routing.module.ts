import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from './components/projects/projects.component';
import {UserComponent} from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/project', pathMatch: 'full' },
  { path: 'project', component: ProjectsComponent },
  { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}