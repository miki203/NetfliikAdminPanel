import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {UrlConstants} from '../url-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly headers: HttpHeaders;
  private username: string;
  private password: string;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-type': 'application/json'
    });

    const userJson = localStorage.getItem('currentUser');

    JSON.parse(userJson, (key, value) => {
      if (key === 'username') {
        this.username = value;
      }
      if (key === 'password') {
        this.password = value;
      }
    });
  }

  getUser(user_name, user_password) {
    return this.http.get(UrlConstants.URL_USERS + '/' + user_name + '/' + user_password);
  }

  createUser(user: User): Observable<any> {
    const body = JSON.stringify(user);
    return this.http.post(UrlConstants.URL_USERS_CREATE, body, {headers: this.headers});
  }

  changePassword(newPassword: string) {
    const body = '{"newPassword": "' + newPassword + '", "oldPassword": "' + this.password + '", "username": "' + this.username + '" }';
    return this.http.put(UrlConstants.URL_USERS_CHANGE_PASS, body, {headers: this.headers});
  }
}
