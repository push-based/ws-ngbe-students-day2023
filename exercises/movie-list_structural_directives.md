# Exercise: structural directives

In this exercise we meet our first `structural directives`.
We want to display a loading state when there is no data available as well as be able to
display a list of movies instead of a single card.

## MovieListComponent

It's finally time to display a list of movies instead of only a single one.
Introduce a new component `MovieListComponent`.

<details>
  <summary>Create MovieListComponent</summary>

```bash
ng g c movie/movie-list
```

</details>

It should receive a `@Input() movies: MovieModel[]` as input and display it as list in its template.

<details>
  <summary>Movie Input</summary>

```ts
// movie-list.component.ts

@Input() movies: MovieModel[]
```

</details>

Create a `div.movie-list`.
Inside, you should iterate over the `MovieModel[]` using the `*ngFor` structural directive and create
a `movie-card` for each movie in the array.

<details>
  <summary>MovieListComponent template</summary>

```html
<!-- movie-list.component.ts -->

<div class="movie-list">

  <movie-card *ngFor="let movie of movies"></movie-card>
    
</div>
```

</details>

As for the stylings, please just add the following snippet to `movie-list.component.ts`.

<details>
  <summary>MovieListComponent styles</summary>

Insert these styles into the `styles: [``]` property of the `MovieListComponent`

```scss
/* movie-list.component.ts */

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 35rem));
  gap: 4rem 2rem;
  place-content: space-between space-evenly;
  align-items: start;
  margin: 4rem 0;
  position: relative;
}

```

</details>

Great! The component is now ready to use. So let's move back to `AppComponent`.

Prepare an array of Movies `MovieModel[]` we can use to display a list.

<details>
    <summary>Array of Movies</summary>

```ts
// app.component.ts

movies: MovieModel[] = [
    {
        title: 'Turning Red',
        poster_path: '/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
        vote_average: 5
    },
    {
        poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        title: "Puss in Boots: The Last Wish",
        vote_average: 8.4,
    }, // duplicate if you like :)
]

```

</details>

As a final step we need to adjust the template. Remove the usage of `movie-card` and replace it with `movie-list` instead.
Assign the `movies` property as its input.

<details>
    <summary>AppComponent Template</summary>

```html
<!-- app.component.ts -->
<app-shell>
    <movie-list [movies]="movies"></movie-list>
</app-shell>

```
</details>

Well done! Serve the application and see if the movies list is showing up :)


## Display missing/loading movies state

Now we will use the `*ngIf` structural directive in the `AppComponent` to show a loading state when
there is no data available.

Try to hide the `movie-list` when there is no data and instead (`;else:`) show another template.

As for the loader template, you can use a pre-defined snipped.
In order to use it as the `else` case, you need to create an `ng-template` and assign it a name.

<details>
  <summary>Loader Template</summary>

```html
<!--app.component.ts-->

<ng-template #loader>
  <div class="loader"></div>
</ng-template>
```

</details>


Now we can use `*ngIf` on the `movie-list` to display it only when `movies` have a value.

<details>
  <summary>Hide MovieList when no movie is there</summary>

```html
<!--app.component.ts-->
<app-shell>
    <movie-list
            *ngIf="movies?.length"
            [movies]="movies" />

    <ng-template #loader>
        <div class="loader"></div>
    </ng-template>
</app-shell>
```

</details>

Finally, apply the `loader template` as `else` branch for the `*ngIf`.

<details>
  <summary>Show Loader if no movie is present</summary>

```html
<!--app.component.ts-->
<app-shell>
    <movie-list
            *ngIf="movies?.length; else: loader"
            [movies]="movies" />

    <ng-template #loader>
        <div class="loader"></div>
    </ng-template>
</app-shell>
```

</details>

Serve the application, unset the `movies` property (e.g. set to null) and see if the loader is actually showing up.
