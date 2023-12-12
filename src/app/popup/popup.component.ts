import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { GameWindowComponent } from '../game components/game-window/game-window.component';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [GameWindowComponent, NgIf],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})

  
export class PopupComponent {
  hover: boolean = false;
  constructor(private gameWindowComponent: GameWindowComponent) { }

  //prüft ob das popup gehovert wird
  overlayHover(bool: boolean) {
    this.hover = bool;
  }

  //importiert die restart funktion
  restart() {
    this.gameWindowComponent.restart();
  }

  @Input() winner: string = "";
  winnerText: string = this.winner + " hat gewonnen!";
}
