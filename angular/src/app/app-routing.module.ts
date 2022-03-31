import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgammonComponent } from './components/backgammon/backgammon.component';
import { BoardComponent } from './components/board/board.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
   {path:'', component : HomeComponent},
   {path: 'tic-tac-toe', component:BoardComponent},
   {path: 'backgammon', component:BackgammonComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
