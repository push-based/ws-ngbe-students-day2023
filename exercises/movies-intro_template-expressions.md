# Exercise: angular movies intro & template expressions

In this Exercise, we want to install the angular movies workshop project, get to know the codebase a bit
and also create our first template expressions in the `AppComponent`.

## serve application

The first task is to actually run the application. Please go to the installed
workshop project and `serve` the existing application.

```bash
ng serve -o

# or

npm run start
```

## implement movie-card template

Go to `AppComponent` and add the html for a static `movie-card` into its template.

<details>
    <summary>Show snippet</summary>

go to `src/projects/movies/src/app.component.ts`

implement movie-card with static html

```html
<!--app.component.ts-->
<app-shell>
     <div class="movie-card">
        <img class="movie-image" src="https://image.tmdb.org/t/p/w300/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg">
        <div class="movie-card-content">
            <div class="movie-card-title">
                Turning Red
            </div>
            <div class="movie-card-rating">
                5
            </div>
        </div>
    </div>
</app-shell>
```

</details>

You can already serve the application and observe the template displaying a static movie-card.

## bring template to live

Let's take it one step further and bind actual data to our template.
Add a local `movie` field to the `AppComponent` holding three properties:

* `title` 
* `poster_path `
* `vote_average`

After that, go to `app.component.html` and bind the `movie` objects properties to the template.

<details>
  <summary>movie variable</summary>

go to `src/projects/movies/src/app.component.ts`

```ts
// app.component.ts

// movie object for data binding
movie = {
    title: 'Turning Red',
    poster_path: '/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
    vote_average: 5
}
```
</details>

<details>
    <summary>template binding</summary>

Apply template binding

go to `src/projects/movies/src/app.component.ts`

```html
<!-- app.component.ts -->

<div class="movie-card">
    <img class="movie-image"
         [src]="'https://image.tmdb.org/t/p/w300' + movie.poster_path">
    <div class="movie-card-content">
        <div class="movie-card-title">
            {{ movie.title }}
        </div>
        <div class="movie-card-rating">
            {{ movie.vote_average }}
        </div>
    </div>
</div>
```
    
</details>

Serve the application and observe the movie card being displayed according the values you've set.

```bash
ng serve
# or
npm run start
```



