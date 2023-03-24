import {Component, ViewEncapsulation} from '@angular/core';
import {AppShellComponent} from './app-shell/app-shell.component';
import {MovieCardComponent} from './movie/movie-card/movie-card.component';
import {MovieModel} from './movie/movie-model';
import {MovieListComponent} from './movie/movie-list/movie-list.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <app-shell>
        <movie-list *ngIf="movies; else: loader" [movies]="movies" />
        <ng-template #loader>
            <div class="loader"></div>
        </ng-template>
    </app-shell>
  `,
  styleUrls: ['./app.component.scss'],
  imports: [
    AppShellComponent,
    MovieCardComponent,
    MovieListComponent,
    NgIf,
  ],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  movies: MovieModel[] = [{
    title: 'Turning red',
    poster_path: '/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
    vote_average: 5
  }, {
    title: 'Turning red',
    poster_path: '/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
    vote_average: 5
  }, {
    title: 'Turning red',
    poster_path: '/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
    vote_average: 5
  }];

  constructor(
  ) { }

}
