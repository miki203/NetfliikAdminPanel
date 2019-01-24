import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {AdminPanelComponent} from './admin/admin-panel/admin-panel.component';
import {NewMovieComponent} from './admin/new-movie/new-movie.component';
import { FormsModule } from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {AuthGuard} from './guard/auth-guard';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { HeaderComponent } from './header/header.component';
import { DelMovieComponent } from './admin/del-movie/del-movie.component';
import { DelUserComponent } from './admin/del-user/del-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    LoginComponent,
    AdminPanelComponent,
    NewMovieComponent,
    HeaderComponent,
    DelMovieComponent,
    DelUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    NgbModule,
    NgFlashMessagesModule.forRoot(),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
