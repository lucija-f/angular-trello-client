import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-msg',
  templateUrl: './modal-msg.component.html',
  styleUrls: ['./modal-msg.component.css']
})
export class ModalMsgComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalMsgComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  // openPopupMsg(msg: string): void {
  //   const dialogRef = this.dialog.open(ModalMsgComponent, {
  //     width: '400px',
  //     data: {msg: msg},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.title = result;
  //     this.patchStatusColumn(statusId, this.title);
  //   });
  // }
  
}
