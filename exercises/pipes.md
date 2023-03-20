# Exercise: Pipes

In this exercise you will learn about angulars way to transform raw data from a component inside
the template. For this concept angular uses a building block called `Pipe`.
Let's build our first `Pipe`, the `MovieImagePipe`.

## implement movie-image pipe

create a `Pipe` to deliver the formatted image url for our movie-card component

It returns a concatenated string of `https://image.tmdb.org/t/p/w300` + the input value.  
If the input value is falsy, it should return a placeholder url instead.

The url to the placeholder image is: `assets/images/no_poster_available.jpg`.

<details>
    <summary>Generate Pipe</summary>

```bash
ng generate pipe movie/movie-image

OR

ng g p movie/movie-image
```
</details>

<details>
    <summary>MovieImagePipe implementation</summary>

```ts
@Pipe({
    name: 'movieImage',
    standalone: true
})
export class MovieImagePipe implements PipeTransform {
    
    transform(value: string): string {
        if (value) {
            return `https://image.tmdb.org/t/p/w300${value}`;
        }
        return `assets/images/no_poster_available.jpg`;
    }
}
```
</details>

## use pipe in movie-card

Go to the `MovieCardComponent`s template and use the `movieImage` pipe in the template to transform the `poster_path`
into the correct image path.

<details>
  <summary>use `MovieImagePipe`</summary>

```html
<!-- movie-card.component.html -->

<img class="movie-image" [src]="movie.poster_path | movieImage">
```


</details>

Try out the fallback image by setting the `poster_path` property in the `AppComponent` to an empty string `''`.
The poster should now be displaying the fallback image.

## Bonus: make pipe configurable

As a bonus add a second argument to the `transform` method which allows configuring the `width`
of the fetched image. It should default to `300` and is used to concatenate the url to `https://image.tmdb.org/t/p/w${width}`.

<details>
  <summary>Configurable Pipe</summary>


```ts
// movie-image.pipe.ts

transform(value: string, width = 300): string {
  if (value) {
    return `https://image.tmdb.org/t/p/w${width}${value}`;
  }
  return `assets/images/no_poster_available.jpg`;
}
```
</details>

In the `MovieCardComponent`s template, you can now go ahead and change value for the pipe.
Possible values you can test for the sizes are `300`, `342`, `500`, `780`.

<details>
  <summary>Configure different sizes</summary>

```html
<!--movie-card.component.ts-->

<img class="movie-image" [src]="movie.poster_path | movieImage: 342">

```

</details>


