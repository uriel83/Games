import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardServicesService {

  squares:string[] = [];
  GameMoves:number;
  GameOver:boolean;
  win:boolean;
  private CHECK_ROW = 1;
  private CHECK_COL = 3;
  private CHECK_SLANT_UP = 2;
  private CHECK_SLANT_DOWN = 4;

  constructor() { 
    this.newGame()
  }

  newGame(){
    this.squares = new Array(9).fill(null); 
    this.GameMoves = 0
    this.GameOver = false;
    this.win = false;
  }

  checkWin(chosenSquare:number){
    if (this.checkMove(chosenSquare, chosenSquare % 3, this.CHECK_ROW)){
      return true;
    } else {
      let rowNumber = this.rowNumber(chosenSquare)  
      if (this.checkMove(chosenSquare,rowNumber, this.CHECK_COL)){
        return true
      }else{
        if (chosenSquare%2 == 0) {
          if (this.checkSlant()){
            return true
          }
        }
      }
    }
    return false
  }

  checkMove(chosenSquare:number, rowOrCol:number, distanceFromSquare:number){
    switch (rowOrCol) {
      case 0:
            if (this.checkAfter(chosenSquare, distanceFromSquare) && this.checkAfter(chosenSquare + distanceFromSquare, distanceFromSquare)){
              return true
            }else
        break;
      case 1:
        if (this.checkBefore(chosenSquare, distanceFromSquare) && this.checkAfter(chosenSquare, distanceFromSquare)){
          return true
            } 
         break;
        case 2:
          if (this.checkBefore(chosenSquare, distanceFromSquare) && this.checkBefore(chosenSquare - distanceFromSquare, distanceFromSquare)){
            return true
              } 
        break;
      default:
        break;
    }
    return false
  }

  rowNumber(chosenSquare:number){
    if (0 <= chosenSquare && chosenSquare <= 2){
      return 0
    } else {
      if (3 <= chosenSquare && chosenSquare <= 5){
        return 1
      } else {
        if (6 <= chosenSquare && chosenSquare <= 8){
          return 2
        } else {
            return - 1
        }
      }
    }
  }

  checkBefore(chosenSquare:number, distanceFromSquare:number){
    if (this.squares[chosenSquare] == this.squares[chosenSquare - distanceFromSquare]){
      return true
    }else{
      return false;
    }
  }

  checkAfter(chosenSquare:number, distanceFromSquare:number){
    if (this.squares[chosenSquare] == this.squares[chosenSquare + distanceFromSquare]) {
      return true
    }
    else{
      return false;
    }
  }

  checkSlant(){
    if (this.checkMove(0, 0, this.CHECK_SLANT_DOWN)) {
      return  true
    } else {
      if (this.checkMove(6, 2, this.CHECK_SLANT_UP)) {
        return true
      }
    }
    return false
  }
  
}


