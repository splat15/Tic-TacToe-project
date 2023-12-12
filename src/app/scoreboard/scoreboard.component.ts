import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ScoreService } from '../score.service';
import { AppComponent } from '../app.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [NgFor, CommonModule, NavBarComponent],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss'
})
export class ScoreboardComponent {
  constructor(private scoreService: ScoreService, private navBarComponent: NavBarComponent) { }
  getScores(): string[] {
    return this.scoreService.get()
  }

  clear() {
    this.scoreService.clear();
  }

  getLabel(result: string): string {
    if (result == "╳") {
      if (this.navBarComponent.name.x != "") {
        return this.navBarComponent.name.o;
      } else {
        return "Spieler 1"
      }
    } else if (result == "◯") {
      if (this.navBarComponent.name.o != "") {
        return this.navBarComponent.name.o;
      } else {
        return "Spieler 2"
      }
    }
    return "";
  }
}
