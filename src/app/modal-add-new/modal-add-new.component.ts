import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-new',
  templateUrl: './modal-add-new.component.html',
  styleUrls: ['./modal-add-new.component.css']
})
export class ModalAddNewComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalAddNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
