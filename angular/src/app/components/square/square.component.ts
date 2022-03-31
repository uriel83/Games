import { Component, Input, OnInit } from '@angular/core';
import { BoardServicesService } from 'src/app/services/board-services.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() chosenSquare:number;

  constructor(public borderService:BoardServicesService) { }

  ngOnInit(): void {
  }

  playerClick(){
    if (this.borderService.squares[this.chosenSquare]==null && !this.borderService.win) {
      
      this.addMove()
      if (this.borderService.GameMoves>3) {
       this.borderService.win = this.borderService.checkWin(this.chosenSquare);       
      }
      if (this.borderService.GameMoves==8) {
        this.borderService.GameOver=true;
      }
      this.borderService.GameMoves++;
    } 
     
  }

  addMove(){
    if ( this.borderService.GameMoves%2==0) {
      this.borderService.squares[this.chosenSquare]="X"
    }else{
      this.borderService.squares[this.chosenSquare]="O"
    }
  }
}
