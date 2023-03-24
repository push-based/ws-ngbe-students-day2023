import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieListComponent} from '../movie-list/movie-list.component';
import {MovieService} from '../movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'movie-page',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  template: `
      <movie-list *ngIf="(movies$ | async)?.results as movies; else: loader" [movies]="movies" />
      <ng-template #loader>
          <div class="loader"></div>
      </ng-template>
  `,
  styles: [
  ]
})
export class MoviePageComponent {

  movieService = inject(MovieService);

  activatedRoute = inject(ActivatedRoute);

  movies$;

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      const category = params.category;
      this.movies$ = this.movieService.getMovies(category);
    });
  }


}
