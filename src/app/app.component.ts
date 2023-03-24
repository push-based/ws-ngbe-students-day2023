import { Component } from '@angular/core';
import { AppShellComponent } from './app-shell/app-shell.component';
import {MovieCardComponent} from './movie/movie-card/movie-card.component';
import {MovieModel} from './movie/movie-model';

@Component({
  selector: 'app-root',
  template: `
    <app-shell>
        <movie-card [movie]="movie" />
    </app-shell>
  `,
  styleUrls: ['./app.component.scss'],
  imports: [
    AppShellComponent,
    MovieCardComponent,
  ],
  standalone: true
})
export class AppComponent {

  movie: MovieModel = {
    title: 'Turning red',
    poster_path: '/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
    vote_average: 5
  }

  constructor(
  ) { }

}
