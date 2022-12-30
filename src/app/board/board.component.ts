import { Component, Input, ViewChild } from '@angular/core';
import { Board } from 'src/models/board';
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

  boards: Board[]
  constructor( private boardService: BoardService) {}
  @ViewChild(StatusComponent) statusComponent: StatusComponent;

  getBoards() {
    this.boardService.getBoards().subscribe((data: Board[]) => {
      this.boards = data;
    })
  }

  showBoard(boardId: number){
    this.statusComponent.showColumns(boardId);
  }

  addNewColumn() {
    this.statusComponent.addStatusColumn(this.id);
  }

  addNewBoard(name: string) {
    this.boardService.addBoard({name}).subscribe(
      {
        next: (b) => 
          this.getBoards(),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
    }
    );
  }


}