import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AuthGuard} from './guard/auth-guard';
import {LoginComponent} from './login/login.component';
import {NewMovieComponent} from './admin/new-movie/new-movie.component';
import {AdminPanelComponent} from './admin/admin-panel/admin-panel.component';
import {DelMovieComponent} from './admin/del-movie/del-movie.component';
import {DelUserComponent} from './admin/del-user/del-user.component';

const routes: Routes = [
  {path: '', component: AdminPanelComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard]},
  {path: 'admin/new-movie', component: NewMovieComponent, canActivate: [AuthGuard]},
  {path: 'admin/del-movie', component: DelMovieComponent, canActivate: [AuthGuard]},
  {path: 'admin/del-user', component: DelUserComponent, canActivate: [AuthGuard]},
  {path: '*', component: AdminPanelComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
