# Exercise: Services

In this exercise you will learn a new building block of the angular ecosystem, `Services`.
Your will introduce a service `MovieService` which will serve as our abstraction layer for accessing the `TMDBMovieApi`.

## introduce MovieService

create a new service `MovieService` in the `movie` folder. It should be providedIn `root`.

<details>
    <summary>show solution</summary>

`ng g s movie/movie`

you should end up having the following `MovieService`

```ts
// movie.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
}
```

</details>

Inject, the `HttpService`.

Now start introducing methods for re-usage in our components:
* method to fetch movies by category `getMovies(category: string)` (return value is same as the current `movies$` in `MovieListPageComponent`)
* method to fetch movie by id `getMovieById(id: string)`
 

<details>
    <summary>MovieService implementation</summary>

```ts
// movie.service.ts

private httpClient = inject(HttpClient);

getMovieById(id: string) {
    return this.httpClient.get<TMDBMovieDetailsModel>(
        `${environment.tmdbBaseUrl}/3/movie/${id}`,
        {
            headers: {
                Authorization: `Bearer ${tmdbApiReadAccessKey}`,
            },
        }
    );
}

getMovies(category: string) {
    return this.httpClient.get<{ results: MovieModel[]}>(
        `${environment.tmdbBaseUrl}/3/movie/${category}`,
        {
            headers: {
                Authorization: `Bearer ${tmdbApiReadAccessKey}`,
            },
        }
    );
}
```

</details>

## Use MovieService

Now we want to make use of our `MovieService` in the `AppComponent`.

<details>
    <summary>Use MovieService</summary>

Go to the `AppComponent`, inject the `MovieService` and replace it with the `HttpClient`

```ts
// app.component.ts
private movieService = inject(MovieService);
movies$ = this.movieService.getMovies('popular');

```

</details>

Well done, you have successfully introduced a `Service` to abstract away the data-access layer of your application.
Serve the application, the movie list should still be visible.


