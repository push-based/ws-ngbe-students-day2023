import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieModel} from '../movie-model';
import {MovieCardComponent} from '../movie-card/movie-card.component';

@Component({
  selector: 'movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  template: `
    <div class="movie-list">
        <movie-card *ngFor="let movie of movies" [movie]="movie"/>
    </div>
  `,
  styles: [`
    .movie-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(10rem, 35rem));
      gap: 4rem 2rem;
      place-content: space-between space-evenly;
      align-items: start;
      margin: 4rem 0;
      position: relative;
    }`
  ]
})
export class MovieListComponent {

  @Input() movies: MovieModel[];

}
