import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { ScoreboardComponent } from '../scoreboard/scoreboard.component';
import { ScoreService } from '../score.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [AppComponent, ScoreboardComponent, CommonModule, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
  
export class NavBarComponent {
  name = {
    x: "",
    o: ""
  }
  constructor(private appComponent: AppComponent, private router: Router, public scoreService: ScoreService) {
  }
  
  //importiert die get methode von score
  getScore(): string[] {
    return this.scoreService.get();
  };

  //importiert die playerGet methode von score
  getPlayerScore(player: string): number {
    return this.scoreService.playerGet(player);
  }
  title = this.appComponent.title;
  scoreHover: boolean = false;
  scoreClick: boolean = false;

  //prüft ob scoreboard-elemente gehovert werden
  public scoreboardHover(bool: boolean): void {
    this.scoreHover = bool;
  }

  //prüft ob das scoreboard per click ausgefahren wurde
  public scoreboardClick(): void {
    if (this.scoreClick == false) {
      this.scoreClick = true;
    } else {
      this.scoreClick = false;
    }
  }
}
