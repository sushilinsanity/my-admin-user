import { Component, OnInit } from '@angular/core';
import { ApiHelper } from '../shared/api/api.helper';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  loginRegister: string;

  constructor(private _apiHelper: ApiHelper) { }

  ngOnInit(): void {
    this._apiHelper.loginRegister.subscribe(response => {
      this.loginRegister = response;
    })
  }

}
