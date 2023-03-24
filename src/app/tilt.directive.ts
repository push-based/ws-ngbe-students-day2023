import {Directive, ElementRef, HostBinding, HostListener, inject} from '@angular/core';

@Directive({
  selector: '[tilt]',
  standalone: true
})
export class TiltDirective {

  @HostBinding('style.transform')
  rotation = 'rotate(0deg)';

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event) {
    const dir = this.determineDirection(event.pageX);
    const degree = dir === 0 ? `30deg` : `-30deg`;
    this.rotation = `rotate(${degree})`;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event) {
    this.rotation = 'rotate(0deg)';
  }

  elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  nativeElement = this.elementRef.nativeElement;

  determineDirection(pos: number): 0 | 1 {
    const width = this.nativeElement.clientWidth;
    const middle = this.nativeElement.getBoundingClientRect().left + width / 2;
    return (pos > middle ? 1 : 0);
  }

}
