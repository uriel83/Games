import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChessBoardComponent } from './chess/chess-board/chess-board.component';
import { BackgammonComponent } from './components/backgammon/backgammon.component';
import { BoardComponent } from './components/board/board.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';



const routes: Routes = [
   {path: '', component : SignInComponent},
   {path: 'sign-in', component : SignInComponent},
   {path: 'sign-up', component : SignUpComponent},
   {path: 'home', component : HomeComponent},
   {path: 'tic-tac-toe', component:BoardComponent},
   {path: 'backgammon', component:BackgammonComponent},
   {path: 'chess', component:ChessBoardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
