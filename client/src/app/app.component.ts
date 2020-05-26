import { Component, OnInit } from '@angular/core';
import { ApiHelper } from './components/shared/api/api.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  isLoading: boolean;

  constructor(private _apiHelper: ApiHelper) { }

  ngOnInit() {
    this._apiHelper.isLoading.subscribe(response => this.isLoading = response);
  }
}
