import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { StatusService } from '../services/status.service';
import { Status } from 'src/models/status';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'status-column',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  public statuses: Status[];
  constructor( private statusService: StatusService) {}

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

}
