import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AnimeComponent } from './sections/anime/anime.component';
import { GamesComponent } from './sections/games/games.component';
import { MusicComponent } from './sections/music/music.component';
import { BooksComponent } from './sections/books/books.component';
import { MoviesComponent } from './sections/movies/movies.component';
import { OthersComponent } from './sections/others/others.component';
import { SectionsGuardService } from '../shared/guard/sections-guard.service';
import { DashboardComponent } from './dashboard.component';
import { SectionsComponent } from './sections/sections.component';
import { AuthGuardService } from '../shared/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'section', component: SectionsComponent, canActivate: [AuthGuardService] },
      { path: 'anime', component: AnimeComponent, canActivate: [SectionsGuardService] },
      { path: 'games', component: GamesComponent, canActivate: [SectionsGuardService] },
      { path: 'music', component: MusicComponent, canActivate: [SectionsGuardService] },
      { path: 'books', component: BooksComponent, canActivate: [SectionsGuardService] },
      { path: 'movies', component: MoviesComponent, canActivate: [SectionsGuardService] },
      { path: 'others', component: OthersComponent, canActivate: [SectionsGuardService] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardoutingModule { }