import { Component } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { PopupComponent } from '../../popup/popup.component';
import { CommonModule } from '@angular/common';
import { ScoreService } from '../../score.service';

@Component({
  selector: 'app-game-window',
  standalone: true,
  imports: [CellComponent, PopupComponent, CommonModule],
  templateUrl: './game-window.component.html',
  styleUrl: './game-window.component.scss'
})

export class GameWindowComponent {
  //initialisierug von variablen
  gameStorage: string[];
  player: string = '╳';
  winner: string = "";
  counter: number = 0;
  hoveredcell: Number = -1;
  constructor(private scoreService: ScoreService) {
    //checkt ob der cookie beschrieben ist
    if (document.cookie.slice(0, 8) == "") {
      //cookie ist nicht beschrieben
      document.cookie = "_________" + document.cookie.slice(9);
      this.gameStorage = [...document.cookie.slice(0, 9)];
    } else {
      //cookie ist beschrieben
      this.gameStorage = [...document.cookie.slice(0, 9)];
      //stellt den aktuellen spieler wieder her
      if (this.moreOf(this.gameStorage, "╳", "◯") == 1) {
        this.player = "◯";
      } else {
        this.player = "╳";
      }
      //prüft, ob die gewinnvorraussetzung getroffen ist
      let checked: string = this.check(this.gameStorage);
      if (checked != "") {
        this.winner = checked;
      } else {
        //prüft ob gleichstand ist und setzt counter
        this.counter = this.gameStorage.filter((element) => element != "_").length
        if (this.winner == "" && this.counter == 9) {
          this.winner = "noone"
          this.scoreService.add("Gleichstand");
        }
      }
    }
  }

  //prüft welcher von beiden werten mehr in einem array vorhanden ist
  moreOf(arr: string[], text1: string, text2: string): number {
    let check1: string[] = arr.filter((element) => element == text1);
    let check2: string[] = arr.filter((element) => element == text2);
    if (check1.length > check2.length) {
      return 1;
    } else if (check1.length == check2.length) {
      return -1;
    } else {
      return 2;
    }
  }

  //wandelt formatierten text in standard text um, um punkte zu spiechern
  win(text: string): string {
    if (text == "╳") {
      return "x";
    } else {
      return "o";
    }
  }

  //plaziert ein feld an der gewünschten position in dem spielfeld
  place(cell: number): void {
    if (this.gameStorage[cell] == "_") {
      this.gameStorage[cell] = this.player;
      document.cookie = this.gameStorage.join("") + document.cookie.slice(9);
      this.player == '╳' ? this.player = '◯' : this.player = '╳';
      this.winner = this.check(this.gameStorage);
      if (this.winner != "") {
        this.scoreService.add(this.winner);
        this.scoreService.playerAdd(this.win(this.winner));
        console.log(this.scoreService.get());
        console.log(document.cookie);
      }
      this.counter++;
      if (this.winner == "" && this.counter == 9) {
        this.winner = "noone"
        this.scoreService.add("Gleichstand");
      }
      console.clear();
      console.log(this.gameStorage)
      console.log(document.cookie);
    }
  }

  //startet das spiel neu
  restart(): void {
    if (this.gameStorage.some((element) => element != "_") && this.winner == "") {
      this.scoreService.add("Reset");
    }
    document.cookie = "_________" + document.cookie.slice(9);
    this.gameStorage = [...document.cookie.slice(0, 9)];
    this.winner = "";
    this.player = '╳';
    this.counter = 0;
  }

  //prüft die gewinnvorraussetung
  check(array: string[]): string {
    //prüft horizontal
    if (this._equal(array, 0, 1, 2)) {
      return array[0];
    } else if (this._equal(array, 3, 4, 5)) {
      console.log(this.winner);
      return array[3];
    } else if (this._equal(array, 6, 7, 8)) {
      return array[6];
      //prüft vertikal
    } else if (this._equal(array, 0, 3, 6)) {
      return array[0];
    } else if (this._equal(array, 1, 4, 7)) {
      return array[1];
    } else if (this._equal(array, 2, 5, 8)) {
      return array[2];
      //prüft diagonal
    } else if (this._equal(array, 0, 4, 8)) {
      return array[4];
    } else if (this._equal(array, 2, 4, 6)) {
      return array[4];
    } else {
      return "";
    }
  }

  //private funktion zum checken der gleichheit von 3 werten
  private _equal(array: string[], index1: number, index2: number, index3: number): boolean {
    if (array[index1] == array[index2] && array[index1] == array[index3] && array[index1] != "_") {
      return true;
    } else {
      return false;
    }
  }
}
