# Exercise: HttpClient & Observables

In this exercise we get to know the `HttpClient` as well as fire our first `GET` request in order to fetch a list of `Movies`. We will
then be able to use real data in our application.

## setup HttpClient

Inject the `HttpClient` as `httpClient` property into the `AppComponent`.

<details>
    <summary>inject HttpClient</summary>

```ts
// app.component.ts
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export class AppComponent {
    
    private readonly httpClient = inject(HttpClient);

}
```
</details>

## configure http request

Use the `HttpClient` in order to set up the get request. We will store the value
of the request in a `movies$` field. The `$` in the end symbolises an `Observable` value.

The url to use will be `${environment.tmdbBaseUrl}/3/movie/popular`.
We also need to configure headers in order to communicate with our API.

The return value of the request will be of type `{ results: MovieModel[] }`.

<details>
    <summary>movie$ http request</summary>

```ts
// app.component.ts

movies$ = this.httpClient.get<{ results: MovieModel[] }>(
    `${environment.tmdbBaseUrl}/3/movie/popular`,
    {
        headers: {
            Authorization: `Bearer ${environment.tmdbApiReadAccessKey}`
        }
    }
);
```

</details>

## display real values

As of now, no http request is fired. The `movie$` value is lazy and needs to be used
in order to send the request and retrieve data.

Now it's time to display & fetch.

Make use of the `async` pipe in order to display the values of the `movie$` data in
the template.

Replace the `*ngIf="movies?.length"` with `*ngIf="(movies$ | async)?.results as movies".

<details>
    <summary>movie$ template binding</summary>

```ts
// app.component.ts

@Component({
  template: `
    <app-shell>
        <movie-list
          *ngIf="(movies$ | async)?.results as movies; else: loader"
          [movies]="movies"/>
    
        <ng-template #loader>
            <div class="loader"></div>
        </ng-template>
    </app-shell>
  `  
})
export class AppComponent {
    movies$ = this.httpClient.get<{ results: MovieModel[] }>(
        `${environment.tmdbBaseUrl}/3/movie/popular`,
        {
            headers: {
                Authorization: `Bearer ${environment.tmdbApiReadAccessKey}`
            }
        }
    );
}
```

</details>

Good job, please serve the application and see how your data is beautifully being displayed
as a list in your application.

Well done! You have successfully fired a `GET` request with the `HttpClient`! We are 1 step closer to a fully
working app :)

## Bonus: throttle and watch loading spinner

Let's now see if our loading spinner is actually doing what it should (display as long as there are no movies) by
throttling your connection with the dev tools.

Serve the application and go to the network tab of the chrome dev tools.
Configure network throttling to something very slow (slow/fast 3g).

Refresh the page and see if the loading spinner appears for a while until the result is finally there.

