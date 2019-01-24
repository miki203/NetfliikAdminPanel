import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {NgFlashMessageService} from 'ng-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user_name: String;
  private password: String;

  constructor(
    private userService: UserService,
    private router: Router,
    private ngFlashMessageService: NgFlashMessageService
  ) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.getUser(this.user_name, this.password).subscribe(data => {
      localStorage.setItem('currentUser', JSON.stringify(data));
      window.location.reload();
      this.router.navigate(['/admin']);
    }, error => {
      if (error.status === 403) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Wprowadzono niepoprawne login lub hasło'],
          dismissible: false,
          timeout: false,
          type: 'danger'
        });
      } else if (error.status === 404) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Brak użytkownika w bazie'],
          dismissible: false,
          timeout: false,
          type: 'danger'
        });
      }
    });
  }

}
