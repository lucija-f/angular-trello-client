import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule
 } from "igniteui-angular";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSelectModule } from '@angular/material/select';


import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { TicketComponent } from './ticket/ticket.component';
import { ModalStatusComponent } from './modal-status/modal-status.component';
import { ModalTicketComponent } from './modal-ticket/modal-ticket.component';
import { BoardComponent } from './board/board.component';
import { ModalMsgComponent } from './modal-msg/modal-msg.component';
import { ModalAddNewComponent } from './modal-add-new/modal-add-new.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    DropDownComponent,
    TicketComponent,
    ModalStatusComponent,
    ModalTicketComponent,
    BoardComponent,
    ModalMsgComponent,
    ModalAddNewComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    DragDropModule,
    BrowserModule,
    FormsModule,
    IgxDropDownModule,
    IgxButtonModule,
    IgxToggleModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    ScrollingModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {



 }
