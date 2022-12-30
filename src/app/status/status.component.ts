import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { StatusService } from '../services/status.service';
import { Status } from 'src/models/status';
import { TicketComponent } from '../ticket/ticket.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalStatusComponent } from '../modal-status/modal-status.component';
import { ModalMsgComponent } from '../modal-msg/modal-msg.component';

@Component({
  selector: 'status-column',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {

  // decorate the property with @Input()
  @Input() boardId: number;

  title: string;
  public statuses: Status[];
  constructor( private statusService: StatusService, private dialog: MatDialog) {}

  @ViewChild(TicketComponent) ticketComponent: TicketComponent;

  addTicket(status: Status) {
    this.ticketComponent.addNewTicket(status.id);
    this.showColumns(status.boardId)
  }

  showColumns(boardId: number){
    this.statusService.getStatuses(boardId).subscribe((data: Status[]) => {
      this.statuses = data;
    })
  }

  addStatusColumn(boardId: number){
    if (this.statuses != undefined){
      this.statusService.addStatusColumn({name: 'New Status', boardId: boardId}).subscribe(
        {
          next: (v) => this.statuses.push(v),
          error: (e) => console.error(e),
          complete: () => console.info('complete') 
        }
      );
    } else {
      this.openPopupMsg('Please, choose your board to add a new Status Column.');
    }
    
  }

  deleteStatusColumn(statusId: number){
    this.statusService.deleteStatus(statusId).subscribe(
      {
        next: () => {
          this.statuses = this.statuses.filter(function( obj ) {
            return obj.id !== statusId;
          });
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      }
    );
  }

  patchStatusColumn(statusId: number, title: string){
    this.statusService.patchStatusColumn(statusId, title).subscribe(
      {
        next: (v) => {
          const objIndex = this.statuses.findIndex((status => status.id == v.id));
          this.statuses[objIndex].name = v.name;
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      }
    );
  }

  openPopup(statusId: number){
    const dialogRef = this.dialog.open(ModalStatusComponent, {
      width: '400px',
      data: {title: this.title, statusId: statusId},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.title = result;
      this.patchStatusColumn(statusId, this.title);
    });
  }

  openPopupMsg(msg: string) {
    const dialogRef = this.dialog.open(ModalMsgComponent, {
      width: '400px',
      data: {msg: msg},
    });
  }

}
