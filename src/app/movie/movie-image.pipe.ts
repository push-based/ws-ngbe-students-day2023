import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImage',
  standalone: true
})
export class MovieImagePipe implements PipeTransform {

  transform(posterPath: string, size = 300): string {
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w${size}${posterPath}`
    }
    return 'assets/images/no_poster_available.jpg';
  }

}
