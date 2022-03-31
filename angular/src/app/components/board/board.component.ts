import { Component, OnInit } from '@angular/core';
import { BoardServicesService } from 'src/app/services/board-services.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(public borderService:BoardServicesService ) { }
  
  ngOnInit(): void {
  }

}
