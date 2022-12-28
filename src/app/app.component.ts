import { Component, ViewChild } from '@angular/core';
import { StatusComponent } from './status/status.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild(StatusComponent) statusComponent: StatusComponent;

  addNewColumn() {
    this.statusComponent.addStatusColumn();
  }
}
