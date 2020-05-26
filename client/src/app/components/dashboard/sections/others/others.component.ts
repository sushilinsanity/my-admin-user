import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToDashboard() {
    this._router.navigate(['dashboard/section']);
  }
}
