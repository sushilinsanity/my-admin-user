import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MessageService } from 'primeng/api';

import { User } from '../model/User';
import { ApiHelper } from '../api/api.helper';

@Injectable()
export class SectionsGuardService implements CanActivate {
  userData: User;

  constructor(private _router: Router, private _apiHelper: ApiHelper, private messageService: MessageService) {
  }

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this._apiHelper.userData.subscribe(response => {
      this.userData = response;
    }, (err) => {
      this._router.navigate(['']);
      this.accessDenied();
    });

    if (this.userData.isAdmin) {
      return true;
    } else if (this.userData.name) {
      const isThere = this.userData.roles.find(role => _route.routeConfig.path === role);
      if (isThere) {
        return true;
      }
      this.accessDenied();
      return false;
    }
    this.accessDenied();
    return false;
  }

  accessDenied() {
    this.messageService.add({ severity: 'error', summary: 'Access Denied', detail: 'Please login again.' })
  }
}