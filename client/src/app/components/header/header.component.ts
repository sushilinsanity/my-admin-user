import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { faUser, faUserShield, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { User } from '../shared/model/User';
import { ApiHelper } from '../shared/api/api.helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userData: User;
  faUser = faUser;
  faUserShield = faUserShield;
  faSignOutAlt = faSignOutAlt;

  constructor(private _apiHelper: ApiHelper, private _messageService: MessageService, private _router: Router) { }

  ngOnInit(): void {
    this._apiHelper.userData.subscribe((response: User) => {
      this.userData = response;
      if (this.userData.isAdmin) {
        this._messageService.add({severity:'success', summary:`Welcome ${response.name}`, detail:'Admin features are activated for you'});
      } else if (this.userData.name) {
        this._messageService.add({severity:'success', summary:`Welcome ${response.name}`, detail:''});
      }
    });
  }

  navigateToAdminPage() {
    this._router.navigate(['admin']);
  }

  onSignOut() {
    this._apiHelper.userData.next({});
    this._apiHelper.loginRegister.next('login');
    this._router.navigate(['']);
    this._messageService.add({ severity: 'success', summary: 'Logged out successfully', detail: '' })
  }
}
