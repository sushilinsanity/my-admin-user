import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';

import { User } from '../../shared/model/User';
import { ApiHelper } from '../../shared/api/api.helper';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  faQuestion = faQuestion;
  userData: User;

  sections = [];

  constructor(private messageService: MessageService, private _apiHelper: ApiHelper, private _router: Router) { }

  ngOnInit(): void {
    this.sections = this._apiHelper.sections
    this._apiHelper.userData.subscribe(response => {
      this.userData = response;
      if (this.userData.name && this.userData.isAdmin) {
        this.sections = this.sections.map(section => {
          section.hasAccess = true;
          return section;
        })
      } else if (this.userData.name) {
        this.sections = this.sections.map(section => {
          const isThere = this.userData.roles.find(role => role === section.url);
          if (isThere) {
            section.hasAccess = true;
          } else {
            section.hasAccess = false;
          }
          return section;
        });
      }
    });
  }

  goToSection(url: string) {
    this._router.navigate([`dashboard/${url}`]);
  }
}