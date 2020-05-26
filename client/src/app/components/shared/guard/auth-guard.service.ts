import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { MessageService } from 'primeng/api';

import { User } from '../model/User';
import { ApiHelper } from '../api/api.helper';

@Injectable()
export class AuthGuardService implements CanActivate {
  userData: User;

  constructor(private _router: Router, private _apiHelper: ApiHelper, private messageService: MessageService) {
  }

  canActivate(): boolean {
    this._apiHelper.userData.subscribe(response => {
      this.userData = response;
    }, (err) => {
      this.accessDenied();
    })

    if (this.userData.name) {
      return true;
    }
    this.accessDenied();
    return false;
  }

  accessDenied(): void {
    this._router.navigate(['']);
    this.messageService.add({ severity: 'error', summary: 'Access Denied', detail: 'Please login again.' })
  }
}