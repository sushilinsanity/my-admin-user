import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToDashboard() {
    this._router.navigate(['dashboard/section']);
  }
}
