import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { StatusService } from '../services/status.service';
import { Status } from 'src/models/status';

@Component({
  selector: 'status-column',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  public statuses: Status[];
  constructor( private statusService: StatusService) {}

  ngOnInit(): void {
    this.statusService.getStatuses().subscribe((data: Status[]) => {
      console.log(data);
      this.statuses = data;
    })
  }


  addStatusColumn(){
    this.statuses.push({id: 11, name: 'New Movie', boardId: 3});
  }

}
