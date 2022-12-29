import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-ticket',
  templateUrl: './modal-ticket.component.html',
  styleUrls: ['./modal-ticket.component.css']
})
export class ModalTicketComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
