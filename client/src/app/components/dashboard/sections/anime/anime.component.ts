import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToDashboard() {
    this._router.navigate(['dashboard/section']);
  }
}
