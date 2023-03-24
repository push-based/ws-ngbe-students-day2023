import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {MoviePageComponent} from './app/movie/movie-page/movie-page.component';

const routes: Routes = [
  {
    path: 'list/:category',
    component: MoviePageComponent
  },
  {
    path: '',
    redirectTo: 'list/popular',
    pathMatch: 'full'
  }
];

bootstrapApplication(AppComponent, {
    providers: [
        provideAnimations(),
        provideHttpClient(),
        provideRouter(routes)
    ]
})
    .catch(e => console.error(e));
