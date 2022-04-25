import { Injectable } from '@angular/core';
import { ToolBlack } from '../enum/tool-black';
import { ToolWhite } from '../enum/tool-white';
import { ChessSquare } from '../model/chessSquare';
import { SquarePress } from '../model/squarePress';

@Injectable({
  providedIn: 'root'
})
export class ChessServiceService {
  board: ChessSquare[][]=[];
  playerClick = false;
  squarePress: SquarePress = {x:null, y:null}
  numberOfMoves = 0;
  // square:chessSquare;
  constructor() { }

  newBoard(){
  for(var x: number = 0; x < 8; x++) {
        this.board[x]=[]
        for(var y: number = 0; y< 8; y++) {
            this.board[x][y] ={
                                            gameToolsBlack:false,
                                            gameToolsWhite:false,
                                            checkUpMove:false,
                                            tool:''
                                          };
        }
    }
  }

  newGame(){
   this.newBoard();
    for (let x = 0; x < 8; x++) {
      this.board[x][1].tool= ToolBlack.SOLIDER;
      this.board[x][6].tool= ToolWhite.SOLIDER;
      switch (x) {
        case 0:
        case 7:
          this.board[x][0].tool = ToolBlack.TOWER;
          this.board[x][7].tool = ToolWhite.TOWER;
          break;
        case 1:
        case 6:
          this.board[x][0].tool = ToolBlack.HORSE;
          this.board[x][7].tool = ToolWhite.HORSE;
          break;
        case 2:
        case 5:
          this.board[x][0].tool = ToolBlack.RUNNER;
          this.board[x][7].tool = ToolWhite.RUNNER;
          break;
        case 3:
          this.board[x][0].tool = ToolBlack.QUEEN;
          this.board[x][7].tool = ToolWhite.KING;
          break;
        case 4:
          this.board[x][0].tool = ToolBlack.KING;
          this.board[x][7].tool = ToolWhite.QUEEN;
          break;
        default:
          break;
      }
      this.board[x][0].gameToolsBlack= true;
      this.board[x][1].gameToolsBlack= true;
      this.board[x][6].gameToolsWhite= true;
      this.board[x][7].gameToolsWhite= true;
    }
  
  }
}
