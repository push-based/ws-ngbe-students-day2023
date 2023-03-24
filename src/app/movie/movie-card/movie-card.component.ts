import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StarRatingModule} from '../../ui/pattern/star-rating/star-rating.module';
import {MovieModel} from '../movie-model';
import {TiltDirective} from '../../tilt.directive';
import {MovieImagePipe} from '../movie-image.pipe';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [CommonModule, StarRatingModule, TiltDirective, MovieImagePipe],
  template: `
      <div class="movie-card" tilt >
          <img class="movie-image"
               [src]="movie.poster_path | movieImage: 500">
          <div class="movie-card-content">
              <div class="movie-card-title">
                  {{ movie.title }}
              </div>
              <div class="movie-card-rating">
                  <ui-star-rating [rating]="movie.vote_average" />
              </div>
          </div>
      </div>
  `,
  styles: [`
    /* movie-card.component.ts */

    .movie-card {
      transition: transform .15s cubic-bezier(.4,0,.2,1) 0s;
      max-width: 300px;
    }

    .movie-card:hover {
      transform: scale(1.03);
    }

    .movie-image {
      display: block;
      width: 100%;
      height: auto;
    }

    .movie-card-content {
      text-align: center;
      padding: 1.5rem 3rem;
      font-size: 1.5rem;
    }

    .movie-card-title {
      font-size: 2rem;
    }
  `]
})
export class MovieCardComponent {

  @Input() movie: MovieModel;

}
