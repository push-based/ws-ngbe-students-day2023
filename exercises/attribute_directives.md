# Exercise: Attribute Directives

In this exercise we want to build our first `Attribute Directive`.

## set up tilt directive

now we want to add some funk to our component by letting it animate when we enter it with the mouse.

generate the directive

<details>
  <summary>Show Help</summary>


```bash
ng generate directive shared/tilt

OR

ng g d shared/tilt
```

```ts
// tilt.directive.ts

@Directive({
    selector: '[tilt]',
    standalone: true
})
export class TiltDirective {
    
    constructor() {}
}
```

</details>


Set up a private variable for the `ElementRef` and a helper variable for the `nativeElement`.

> Tip: type it with `HTMLElement`, you will have an easier life

<details>
    <summary>show result</summary>

```ts
// tilt.directive.ts

@Directive({
    selector: '[tilt]',
    standalone: true
})
export class TiltDirective implements OnInit {
    
    private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
    private nativeElement = this.elementRef.nativeElement;
    
    constructor() {}

}
```

</details>

Set up the `@HostListener`s as well as the `@HostBinding` needed for our directive to work:

* `@HostListener('mouseenter')`
* `@HostListener('mouseleave')`
* `@HostBinding('style.transform')`

<details>
  <summary>HostListener & HostBinding</summary>

```ts

@HostListener('mouseenter')
rotate(event: MouseEvent) {
    this.rotation = `rotate(30deg)`;
}

@HostListener('mouseleave')
reset() {
    this.rotation = `rotate(0deg)`;
}

@HostBinding('style.transform')
rotation = '0deg';
```
</details>

## use directive to adjust behavior of movie-card

apply the `tilt` directive to the `movie-card.component.ts` template.

It should be applied to the `div.movie-card`.

<details>
  <summary>Show Help</summary>

```html
<!--movie-card.component.ts-->

<div class="movie-card" tilt>
    <!--  content-->
</div>
```

Also add the `TiltDirective` to the `imports` section of the `MovieCardComponent`.

```ts
<!--movie-card.component.ts-->

@Component({
    /**/
    imports: [TiltDirective],
    template: `
        <div class="movie-card" tilt>
          <img class="movie-image" [src]="'https://image.tmdb.org/t/p/w300/' + movie.poster_path">
          <div class="movie-card-content">
            <div class="movie-card-title">
              {{ movie.title }}
            </div>
            <div class="movie-card-rating">
              {{ movie.rating }}
            </div>
          </div>
        </div>
      `,
})
export class MovieCardComponent {}
```

</details>

serve the application and test your result

```bash
ng serve
```

## implement the funk :-D

now we want to add a more complex animation and tilt the movie-card according to the mouseposition on enter.

Create a method `determineDirection(pos: number): 0 | 1` in the `TiltDirective` class, which returns `0` in case
the mouse entered from the left side and `1` if it entered from the right side.

<details>
  <summary>determineDirection helper function</summary>

```ts
// tilt.directive.ts

/**
 *
 * returns 0 if entered from left, 1 if entered from right
 */
determineDirection(pos: number): 0 | 1 {
    const width = this.nativeElement.clientWidth;
    const middle = this.nativeElement.getBoundingClientRect().left + width / 2;
    return (pos > middle ? 1 : 0);
}
```

</details>

Use this method in the `mouseenter` callback in order to determine if we should tilt `-30` or `30` degrees.
For this, you have to read the `['$event']` from the mouseenter event in order to get the `pageX` property.

<details>
  <summary>determineDirection in mouseenter</summary>

```ts
// tilt.directive.ts

@HostListener('mouseenter', ['$event'])
rotate(event: MouseEvent) {
    // rotate
    const direction = this.determineDirection(event.pageX);
    const degree = direction === 0 ? `30deg` : `-30deg`;
    this.transform = `rotate(${degree})`;
}
```

</details>

Well done, serve the application and test your result!

```bash
ng serve
```

## Bonus: make tilt degrees configurable

We can also make the tilt degrees configurable by using an `@Input` binding in the `TiltDirective`. To
make the DX as convenient as possible we can use the same name for the `@Input` as the directives' `selector`.

<details>
  <summary>configurable tilt degree</summary>

```ts
// tilt.directive.ts

@Input() tilt = 30;

```

</details>

use the input value in the `mouseenter` callback.

<details>
  <summary>use input value</summary>


```ts
// tilt.directive.ts

@Input() tilt = 30;

@HostListener('mouseenter', ['$event'])
rotate(event: MouseEvent) {
    // rotate
    const direction = this.determineDirection(event.pageX);
    const degree = direction === 0 ? `${this.tilt}deg` : `-${this.tilt}deg`;
    this.transform = `rotate(${degree})`;
}

```

</details>

configure different `tilt` values in `movie-card`:

`([tilt]="value")`

<details>
  <summary>configure tilt values</summary>

```html
<!--movie-card.component.html-->
<div class="movie-card" [tilt]="15">
    <!--  content-->
</div>

```

</details>

Congratulations, you have successfully implemented a fully configurable attribute directive.
Test different values and serve the application.
