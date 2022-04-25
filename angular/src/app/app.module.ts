import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';
import { BackgammonComponent } from './components/backgammon/backgammon.component';
import { TriangularComponent } from './components/backgammon/triangular/triangular.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ChessBoardComponent } from './chess/chess-board/chess-board.component';
import { ChessSquareComponent } from './chess/chess-square/chess-square.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardComponent,
    SquareComponent,
    TriangularComponent,
    BackgammonComponent,
    SignInComponent,
    SignUpComponent,
    ChessBoardComponent,
    ChessSquareComponent,
    HeaderComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
     FontAwesomeModule,
     FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
