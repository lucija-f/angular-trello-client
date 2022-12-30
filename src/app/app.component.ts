import { Component, OnInit, ViewChild } from '@angular/core';
import { Board } from 'src/models/board';
import { BoardComponent } from './board/board.component';
import { BoardService } from './services/board.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  boards: Board[]
  selectVal: number;
  @ViewChild(BoardComponent) boardComponent: BoardComponent;

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.boardService.getBoards().subscribe((data: Board[]) => {
      this.boards = data;
    })
  }

  changeBoard(selectVal: number){
    this.boardComponent.showBoard(selectVal);
  }

  // addNewColumn() {
  //   this.statusComponent.addStatusColumn();
  // }
}
