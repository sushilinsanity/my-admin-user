import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../shared/model/User';
import { ApiServices } from '../../shared/api/api.services';
import { ApiHelper } from '../../shared/api/api.helper';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  showError: boolean;
  errorMessage: string;

  constructor(private _apiService: ApiServices, private _apiHelper: ApiHelper, private _router: Router, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]))
    })
  }

  onRegister() {
    this._apiService.registerUser(this.registerForm.value)
      .subscribe((response: User) => {
        console.log(response);
        if (response._id) {
          this._apiHelper.userData.next(response);
          this._router.navigate(['/dashboard/section']);
        }
      }, (err) => {
        this._messageService.add({severity:'error', summary:err.error.error, detail:''});
        this.clearForm();
      });
  }

  clearForm() {
    this.registerForm.reset();
  }

  goToLogin() {
    this._apiHelper.loginRegister.next('login');
  }
}
