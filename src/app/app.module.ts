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


import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { TicketComponent } from './ticket/ticket.component';
import { ModalStatusComponent } from './modal-status/modal-status.component';
import {MatInputModule} from '@angular/material/input';
import { ModalTicketComponent } from './modal-ticket/modal-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    DropDownComponent,
    TicketComponent,
    ModalStatusComponent,
    ModalTicketComponent,
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {



 }
