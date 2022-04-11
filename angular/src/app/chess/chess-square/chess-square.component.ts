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
  @Input() x: number;
  @Input() y: number;

  square: any;

  constructor(public chessService: ChessServiceService) { }

  ngOnInit(): void {
  }
  playerClick(x: number, y: number) {

    this.chessService.NumberOfMoves++;
    if (this.chessService.board[x][y].tool && !this.chessService.playerClick) {
      this.chessService.playerClick = true;
      this.chessService.squarePress.x = x;
      this.chessService.squarePress.y = y;



      if (this.chessService.board[x][y].gameToolsWhite && this.chessService.NumberOfMoves % 2 == 0) {
        console.log("White");
        this.checkUpMove(x, y, true);


      }
      if (this.chessService.board[x][y].gameToolsBlack && this.chessService.NumberOfMoves % 2 != 0) {
        console.log("Black");
        this.checkUpMove(x, y, true);
      }
    } else {
      if (this.chessService.playerClick) {
        console.log(this.chessService.board[x][y].checkUpMove);

        if (this.chessService.board[x][y].checkUpMove) {
          this.chessService.board[x][y].tool = this.chessService.board[this.chessService.squarePress.x][this.chessService.squarePress.y].tool;
          this.chessService.board[x][y].gameToolsWhite = true;
          this.resetSquare(this.chessService.squarePress.x, this.chessService.squarePress.y)


        } else {
          if (this.chessService.board[x][y].checkUpMove) {

          }
        }
      }

      this.chessService.squarePress = [x, y]
      if (!this.chessService.playerClick) {

        // this.chessService.board[x][y].checkUpMove = true;
      } else {
        this.chessService.playerClick = false;

      }
    }




    console.log(x, ",", y);

  }
  checkUpMove(x: number, y: number, bool: boolean) {
    if (this.chessService.board[x][y].tool == ToolBlack.TOWER || this.chessService.board[x][y].tool == ToolWhite.TOWER || '') {
      for (let square = 0; square < 8; square++) {
        this.chessService.board[x][square].checkUpMove = bool;
        this.chessService.board[square][y].checkUpMove = bool;
      }
    }
  }

  resetSquare(x: number, y: number) {
    console.log("reset " ,x,y);
    
    this.chessService.board[x][y].checkUpMove = false;
    this.chessService.board[x][y].gameToolsBlack = false;
    this.chessService.board[x][y].gameToolsWhite = false;
    this.chessService.board[x][y].tool = '';
    this.checkUpMove(x, y, false);

  }

  squareClass(x: number, y: number) {
    let classOfSquare: string[] = [];
    classOfSquare.push('square')
    classOfSquare.push((x + y) % 2 == 0 ? 'squareWhite' : 'squareBlack');
    if (this.chessService.board[x][y].checkUpMove && this.chessService.playerClick) {
      classOfSquare.push('border-green');

    }

    return classOfSquare
  }
}
