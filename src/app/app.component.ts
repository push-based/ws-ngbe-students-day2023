import {Component, inject, ViewEncapsulation} from '@angular/core';
import {AppShellComponent} from './app-shell/app-shell.component';
import {MovieCardComponent} from './movie/movie-card/movie-card.component';
import {MovieModel} from './movie/movie-model';
import {MovieListComponent} from './movie/movie-list/movie-list.component';
import {AsyncPipe, NgIf} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <app-shell>
        <movie-list *ngIf="(movies$ | async)?.results as movies; else: loader" [movies]="movies" />
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
    AsyncPipe,
  ],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  httpClient = inject(HttpClient);

  movies$ = this.httpClient.get<{ results: MovieModel[] }>(
    `${environment.tmdbBaseUrl}/3/movie/popular`,
    {
      headers: {
        Authorization: `Bearer ${environment.tmdbApiReadAccessKey}`
      }
    }
  );

  constructor(
  ) { }

}
