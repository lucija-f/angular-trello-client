import { Component, Input, ViewChild } from '@angular/core';
import { BoardService } from '../services/board.service';
import { StatusComponent } from '../status/status.component';


@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  
  @Input()
  id: number;

  constructor( private boardService: BoardService) {}
  @ViewChild(StatusComponent) statusComponent: StatusComponent;

  getBoards() {
    this.boardService.getBoards();
  }

  showBoard(boardId: number){
    this.statusComponent.showColumns(boardId);
  }

  addNewColumn() {
    this.statusComponent.addStatusColumn(this.id);
  }

}