import {inject, Injectable} from '@angular/core';
import {MovieModel} from './movie-model';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private httpClient = inject(HttpClient);

  getMovieById(id: string) {

  }

  getMovies(category: string) {
    return this.httpClient.get<{ results: MovieModel[] }>(
      `${environment.tmdbBaseUrl}/3/movie/${category}`,
      {
        headers: {
          Authorization: `Bearer ${environment.tmdbApiReadAccessKey}`
        }
      }
    );
  }
}
