import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToDashboard() {
    this._router.navigate(['dashboard/section']);
  }
}
