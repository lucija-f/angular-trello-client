import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { StatusService } from '../services/status.service';
import { Status } from 'src/models/status';
import { TicketComponent } from '../ticket/ticket.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalStatusComponent } from '../modal-status/modal-status.component';

@Component({
  selector: 'status-column',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  title: string;
  public statuses: Status[];
  constructor( private statusService: StatusService, private dialog: MatDialog) {}

  @ViewChild(TicketComponent) ticketComponent: TicketComponent;

  addTicket(status: number) {
    this.ticketComponent.addNewTicket(status);
  }

  ngOnInit(): void {
    this.statusService.getStatuses().subscribe((data: Status[]) => {
      console.log(data);
      this.statuses = data;
    })
  }

  addStatusColumn(){
    this.statusService.addStatusColumn({name: 'New Status', boardId: 3}).subscribe(
      {
        next: (v) => this.statuses.push(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
    }
    );
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

  OpenPopup(statusId: number){
    const dialogRef = this.dialog.open(ModalStatusComponent, {
      width: '400px',
      data: {title: this.title, statusId: statusId},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.title = result;
      this.patchStatusColumn(statusId, this.title);
    });
  }

}
