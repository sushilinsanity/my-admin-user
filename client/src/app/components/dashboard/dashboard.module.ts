import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';

import { DashboardoutingModule } from './dashboard-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectionsComponent } from './sections/sections.component';
import { AnimeComponent } from './sections/anime/anime.component';
import { GamesComponent } from './sections/games/games.component';
import { MusicComponent } from './sections/music/music.component';
import { BooksComponent } from './sections/books/books.component';
import { MoviesComponent } from './sections/movies/movies.component';
import { OthersComponent } from './sections/others/others.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AnimeComponent,
    SectionsComponent,
    GamesComponent,
    MusicComponent,
    BooksComponent,
    MoviesComponent,
    OthersComponent
  ],
  imports: [
    CommonModule,
    DashboardoutingModule,
    FontAwesomeModule
  ]
})

export class DashboardModule { }