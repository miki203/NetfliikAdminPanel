import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    window.location.reload();
  }

}
