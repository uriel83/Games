import { Component, OnInit } from '@angular/core';
import { ToolBlack } from '../enum/tool-black';
import { ToolWhite } from '../enum/tool-white';
import { ChessServiceService } from '../services/chess-service.service';


@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {
board: any[][]=[];
  constructor(public chessService: ChessServiceService) {
    
   }
  ngOnInit(): void {
    
    this.chessService.newGame()
  }


}
