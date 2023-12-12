import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameWindowComponent } from './game components/game-window/game-window.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: GameWindowComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }