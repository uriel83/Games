import { Component, Input, OnInit } from '@angular/core';
import { ChessServiceService } from '../services/chess-service.service';
import { ToolBlack } from '../enum/tool-black';
import { ToolWhite } from '../enum/tool-white';
import { Turn } from '../enum/turn';
@Component({
  selector: 'app-chess-square',
  templateUrl: './chess-square.component.html',
  styleUrls: ['./chess-square.component.css']
})
export class ChessSquareComponent implements OnInit {
  @Input() x: number;
  @Input() y: number;
  
  square: any;

  constructor(public chessService: ChessServiceService) { }

  ngOnInit(): void {
  }
  playerClick(x: number, y: number) {
    console.log(this.chessService.board[x][y]);
    
    let turn :string;  //התור של
    (this.chessService.numberOfMoves % 2 == 0) ? turn = Turn.WHITE : turn = Turn.BLACK;
    
    if (this.chessService.board[x][y].tool && !this.chessService.playerClick ) { //בדיקה האם יש כלי במשבצת שנלחצה והאם אנו בתחילתו של מהלך
      if ((this.chessService.board[x][y].gameToolsWhite && turn == Turn.WHITE)||(this.chessService.board[x][y].gameToolsBlack && turn == Turn.BLACK)) { //בדיקה האם צבע הכלי שנלחץ תואם לצבע השחקן שזהו תורו
        this.firstClick(x, y, turn);
      }
      
    } else {
      if (this.chessService.playerClick) {//לחיצה שניה של השחקן

        if (this.chessService.board[x][y].checkUpMove) { //האם מותר להעביר את הכלי למשבצת שנבחרה
          this.lastClick(x, y, turn);
        } else {
          alert("מהלך לא תקין")
          this.chessService.playerClick = false;
          this.checkUpMove(x, y,turn, false);
        }
      }
      if (!this.chessService.playerClick) {

        // this.chessService.board[x][y].checkUpMove = true;
      } else {
        
      }
    }
  }

  firstClick(x: number, y: number, turn : string){
    this.chessService.playerClick = true;
    this.chessService.squarePress = {x:x, y:y}
    this.checkUpMove(x, y,turn, true);  
  }

  lastClick(x: number, y: number, turn : string){
    this.chessService.numberOfMoves++;
    this.chessService.board[x][y].tool = this.chessService.board[this.chessService.squarePress.x][this.chessService.squarePress.y].tool;
    this.chessService.board[x][y].checkUpMove = false;
    if (turn == Turn.BLACK) {
      this.chessService.board[x][y].gameToolsBlack = true;
      this.chessService.board[x][y].gameToolsWhite = false;
    } else {
      if (turn == Turn.WHITE) {
        this.chessService.board[x][y].gameToolsWhite = true;
        this.chessService.board[x][y].gameToolsBlack = false;
      }
      
    }
 
    this.resetSquare(this.chessService.squarePress.x, this.chessService.squarePress.y, turn)
  }

  checkUpMove(x: number, y: number, turn : string, bool: boolean) { 

    if (this.chessService.board[x][y].tool == ToolBlack.TOWER || this.chessService.board[x][y].tool == ToolWhite.TOWER || bool== false) {
      for (let square = 0; square < 8; square++) {  
        
        if(this.checkSquare(x, square , turn)) this.chessService.board[x][square].checkUpMove = bool;
        if(this.checkSquare(square, y , turn)) this.chessService.board[square][y].checkUpMove = bool;
      }
    }
    
    switch (this.chessService.board[x][y].tool) {
      case ToolBlack.TOWER: 
      case ToolWhite.TOWER:
        
        break;
    
      default:
        break;
    }
  }
  checkSquare(x: number, y: number, turn : string){
    if (turn ==  Turn.WHITE && this.chessService.board[x][y].gameToolsBlack || !this.chessService.board[x][y].tool) {
      return true;
    } 
    else{
      if (turn ==  Turn.BLACK && this.chessService.board[x][y].gameToolsWhite || !this.chessService.board[x][y].tool) {
        return true;
    } else    
    return false;
    }
  }

  resetSquare(x: number, y: number, turn : string) {
    this.chessService.board[x][y].checkUpMove = false;
    this.chessService.board[x][y].gameToolsBlack = false;
    this.chessService.board[x][y].gameToolsWhite = false;
    this.chessService.board[x][y].tool = '';
    this.chessService.board[this.chessService.squarePress.x][this.chessService.squarePress.y].checkUpMove = false;
    this.checkUpMove(x, y,turn, false);

  }

  squareClass(x: number, y: number) {
    let classOfSquare: string[] = [];
    classOfSquare.push('square')
    classOfSquare.push((x + y) % 2 == 0 ? 'squareWhite' : 'squareBlack');
    // if (this.chessService.board[x][y].checkUpMove ) {
    if (this.chessService.board[x][y].checkUpMove && this.chessService.playerClick) {
      classOfSquare.push('border-green');

    }

    return classOfSquare
  }
}
