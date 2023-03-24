import { Component } from '@angular/core';
import { DarkModeToggleModule } from '../ui/component/dark-mode-toggle/dark-mode-toggle.module';
import { HamburgerButtonModule } from '../ui/component/hamburger-button/hamburger-button.module';
import { SvgIconModule } from '../ui/component/icons/icon.module';
import { SearchBarModule } from '../ui/component/search-bar/search-bar.module';
import { SideDrawerModule } from '../ui/component/side-drawer/side-drawer.module';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  imports: [
    HamburgerButtonModule,
    SearchBarModule,
    DarkModeToggleModule,
    SvgIconModule,
    SideDrawerModule,
    RouterLink
  ],
  standalone: true
})
export class AppShellComponent {
  sideDrawerOpen = false;
}
