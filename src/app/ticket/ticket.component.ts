import { CdkDragDrop, CdkDragExit, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/models/ticket';
import { TicketService } from '../services/ticket.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalTicketComponent } from '../modal-ticket/modal-ticket.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  // decorate the property with @Input()
  @Input() statusId: number;

  public tickets: Ticket[];
  constructor( private ticketSevice: TicketService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllTicketInColumn(this.statusId);
  }

  getAllTicketInColumn(statusId: number) {
    this.ticketSevice.getTickets(this.statusId).subscribe((data: Ticket[]) => {
      this.tickets = data;
    })
  }

  onDrop(event: CdkDragDrop<Ticket[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.ticketSevice.changeStatus(event.container.data[event.currentIndex].id, this.statusId).subscribe(
        {
          next: (v) => console.log(v),
          error: (e) => console.error(e),
          complete: () => console.info('complete') 
      }
      );
    }
  }

  addNewTicket(status: number){
    this.ticketSevice.createTicket({title: 'New Ticket Title', description: 'New description', statusId: status}).subscribe(
      {
        next: () => window.location.reload(),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
    }
    );
  }

  deleteTicket(ticketId: number){
    this.ticketSevice.deleteTicket(ticketId).subscribe(
      {
        next: () => {
          this.tickets = this.tickets.filter(function( obj ) {
            return obj.id !== ticketId;
          });
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      }
    );
  }

  patchTicket(ticketId: number, title: string, description: string){
    this.ticketSevice.patchTicket(ticketId, title, description).subscribe(
      {
        next: (v) => {
          const objIndex = this.tickets.findIndex((ticket => ticket.id == v.id));
          this.tickets[objIndex].title = v.title;
          this.tickets[objIndex].description = v.description;
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      }
    );
  }

  OpenPopup(ticketId: number, title: string, description: string){
    const dialogRef = this.dialog.open(ModalTicketComponent, {
      width: '400px',
      data: {title: title, ticketId: ticketId, description: description},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      title = result.title;
      description = result.description;
      this.patchTicket(ticketId, title, description);
      }
      this.getAllTicketInColumn(this.statusId); 
    });
  }

}
