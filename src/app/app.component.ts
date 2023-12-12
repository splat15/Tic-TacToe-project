import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router'
import { PopupComponent } from './popup/popup.component';
import { GameWindowComponent } from './game components/game-window/game-window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PopupComponent, NavBarComponent, GameWindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) { }
  title = 'Tic Tac Toe';
}