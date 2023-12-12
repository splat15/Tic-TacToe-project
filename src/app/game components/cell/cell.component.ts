import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { GameWindowComponent } from '../game-window/game-window.component';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [NgClass, GameWindowComponent, NgStyle, CommonModule],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss'
}) 
  
export class CellComponent {
  @Input() xo: string = "";
  @Input() cell: number = -1;
  constructor(private gameWindow: GameWindowComponent) { 
  }

  //importiert die place funktion
  place() {
    this.gameWindow.place(this.cell);
  }
}
