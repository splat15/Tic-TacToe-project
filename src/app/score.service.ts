import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  score: string[] = [];
  tempCookie: string[] = [];
  xCount: number = 0;
  oCount: number = 0;
  constructor() {
    if (typeof document.cookie.slice(9, 10) != 'undefined') {
      this.score = [...document.cookie.slice(9)];
      this.score = this.score.map((element) => element == "1" ? "Gleichstand" : element == "2" ? "Reset" : element);
      console.log(this.score);
      this.xCount = this.score.filter((element) => element == "╳").length;
      this.oCount = this.score.filter((element) => element == "◯").length;
    } else {
      this.score = [];
      document.cookie = document.cookie.slice(0, 9) + 0;
    }
  }

  add(message: string) {
    this.score.push(message);
    if (message == "Gleichstand") {
      message = "1";
    } else if (message == "Reset") {
      message = "2";
    }
    this.tempCookie = [...document.cookie];
    this.tempCookie.push(message);
    document.cookie = this.tempCookie.join("");
  }

  clear(): void {
    this.score = [];
    document.cookie = document.cookie.slice(0, 9);
    this.xCount = 0;
    this.oCount = 0;
  }

  get(): string[] {
    return this.score;
  }

  playerAdd(player: string): void {
    if (player == "o") {
      this.oCount++;
    } else {
      this.xCount++;
    }
  }

  playerGet(player: string): number {
    if (player == "o") {
      return this.oCount;
    } else {
      return this.xCount;
    }
  }
}