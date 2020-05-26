import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../shared/model/User';
import { ApiServices } from '../../shared/api/api.services';
import { ApiHelper } from '../../shared/api/api.helper';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showError: boolean;
  errorMessage: string;

  constructor(private _apiService: ApiServices, private _apiHelper: ApiHelper, private _router: Router, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]))
    })
  }

  onLogin() {
    this._apiHelper.isLoading.next(true);
    this._apiService.loginUser(this.loginForm.value)
      .subscribe((response: User) => {
        this._apiHelper.isLoading.next(false);
        if (response._id) {
          this._apiHelper.userData.next(response);
          this._router.navigate(['/dashboard/section']);
        }
      }, (err) => {
        this._apiHelper.isLoading.next(false);
        this._messageService.add({severity:'error', summary:err.error.error, detail:''});
        this.clearForm();
      });
  }

  clearForm() {
    this.loginForm.reset();
  }

  goToRegister() {
    this._apiHelper.loginRegister.next('register');
  }
}
