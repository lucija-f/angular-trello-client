import { CdkDragDrop, CdkDragExit, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/models/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  // decorate the property with @Input()
  @Input() statusId: number;

  public tickets: Ticket[];
  constructor( private ticketSevice: TicketService) {}

  ngOnInit(): void {
    this.ticketSevice.getTickets(this.statusId).subscribe((data: Ticket[]) => {
      console.log(data);
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
        next: (t) => this.tickets.push(t),
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

}
