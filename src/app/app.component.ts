import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Board } from 'src/models/board';
import { BoardComponent } from './board/board.component';
import { ModalAddNewComponent } from './modal-add-new/modal-add-new.component';
import { BoardService } from './services/board.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  boards: Board[]
  selectVal: number;
  name: string;
  @ViewChild(BoardComponent) boardComponent: BoardComponent;

  constructor(private boardService: BoardService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.boardService.getBoards().subscribe((data: Board[]) => {
      this.boards = data;
    })
  }

  changeBoard(selectVal: number){
    this.boardComponent.showBoard(selectVal);
  }

  openPopupAddNewBoard(){
    const dialogRef = this.dialog.open(ModalAddNewComponent, {
      width: '400px',
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.name = result;
        this.boardComponent.addNewBoard(this.name);;
        }
        this.boardService.getBoards().subscribe((data: Board[]) => {
          this.boards = data;
        })
      });
  }

  deleteBoard(boardId: number){
    this.boardService.deleteBoard(boardId).subscribe(
      {
        next: () => {
          this.boards = this.boards.filter(function( obj ) {
            return obj.id !== boardId;
          });
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      }
    );
  }
}
