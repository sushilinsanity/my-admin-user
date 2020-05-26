import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServices } from '../shared/api/api.services';
import { MessageService } from 'primeng/api';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { User } from '../shared/model/User';
import { ApiHelper } from '../shared/api/api.helper';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users: any[];
  rolesData = [];
  faChevronLeft = faChevronLeft;

  constructor(private _apiServices: ApiServices, private _apiHelper: ApiHelper, private _messageService: MessageService, private _router: Router) { }

  ngOnInit(): void {
    this.rolesData = this._apiHelper.roles;
    this.getUsers();
  }

  getUsers(): void {
    this._apiServices.getAllUsers()
      .subscribe((response: User[]) => {
        this.users = response;

        this.users = this.users.map(user => {
          const activeRoles = [];
          user.roles.toString().split(',').forEach((role: string) => {
            activeRoles.push({ label: role, value: role });
          })
          user.activeRoles = activeRoles;
          return user;
        })
      }, (err) => {
        this.handleError(err);
      });
  }

  saveUserRoles(user): void {
    let payload = { id: user._id, roles: [] };
    const roles = [];
    user.activeRoles.forEach(role => {
      roles.push(role.value);
    })
    payload.roles = roles;

    this._apiHelper.isLoading.next(true);
    this._apiServices.updateUserRoles(payload)
      .subscribe(response => {
        this._apiHelper.isLoading.next(false);
        this._messageService.add({ severity: 'success', summary: 'Roles updated successfully', detail: '' })
        this.getUsers();
      }, (err) => {
        this.handleError(err);
      });
  }

  handleError(err): void {
    this._apiHelper.isLoading.next(false);
    this._messageService.add({ severity: 'error', summary: err.error.error, detail: '' })
  }

  navigateToDashboard() {
    this._router.navigate(['dashboard/section']);
  }
}
