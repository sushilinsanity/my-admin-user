import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MessageService } from 'primeng/api';

import { User } from '../model/User';
import { ApiHelper } from '../api/api.helper';

@Injectable()
export class AdminGuardService implements CanActivate {
  userData: User;

  constructor(private _router: Router, private _apiHelper: ApiHelper, private messageService: MessageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this._apiHelper.userData.subscribe(response => {
      this.userData = response;
    }, (err) => {
      this._router.navigate(['']);
      this.messageService.add({severity:'error', summary:'Access Denied', detail:'Please login again.'})
    })
    
    if (this.userData.isAdmin) {
      return true;
    }
    this._router.navigate(['']);
    this.messageService.add({severity:'error', summary:'Access Denied', detail:'Please login again.'})
    return false;
  }

}