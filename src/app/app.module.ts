import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

@NgModule({
      declarations: [
      ],
      imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            RouterModule,
            NgFor,
            CommonModule
      ],
      providers: [],
      bootstrap: []
})
export class AppModule { }
