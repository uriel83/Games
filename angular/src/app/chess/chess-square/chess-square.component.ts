import { Component, Input, OnInit } from '@angular/core';
import { ChessServiceService } from '../services/chess-service.service';
import { ToolBlack } from '../enum/tool-black';
import { ToolWhite } from '../enum/tool-white';
@Component({
  selector: 'app-chess-square',
  templateUrl: './chess-square.component.html',
  styleUrls: ['./chess-square.component.css']
})
export class ChessSquareComponent implements OnInit {
  @Input() x:number;
  @Input() y:number;
  @Input() square:any;

  click = false;
  constructor(public chessService: ChessServiceService) { }

  ngOnInit(): void {
  }
  playerClick(x:number, y:number){
    if (!this.click) {
      this.click = true;
       this.chessService.board[x][y].checkUpMove = true;
    } else {
      this.click = false;
    }
    
   
    console.log(x,",",y);
    
  }
  checkUpMove(x:number, y:number){
   if (this.chessService.board[x][y].tool == ToolBlack.TOWER ||this.chessService.board[x][y].tool == ToolWhite.TOWER){
     
   }
  }

  squareClass(x:number, y:number){
    let classOfSquare :any[]=[];
    classOfSquare.push((x+y) % 2 == 0  ?'squareWhite' : 'squareBlack');
    this.checkUpMove(x,y);
    if (this.chessService.board[x][y].checkUpMove && this.click) classOfSquare.push('border-green')
    
    return classOfSquare
  }
}
