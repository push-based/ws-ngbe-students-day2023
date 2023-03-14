import { Component } from '@angular/core';
import { AppShellComponent } from './app-shell/app-shell.component';

@Component({
  selector: 'app-root',
  template: `
    <app-shell></app-shell>
  `,
  styleUrls: ['./app.component.scss'],
  imports: [
    AppShellComponent,
  ],
  standalone: true
})
export class AppComponent {

  constructor(
  ) { }

}
