import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventService } from '../EventService';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.css'
})
export class TaskFilterComponent implements OnInit{
  @Input() filter : any;

  constructor(private eventService : EventService){

  }
  
ngOnInit(): void {
  this.filter = "All";
  this.changeFilter();
}

  changeFilter(){
    this.eventService.filter.next(this.filter);
  }
}
