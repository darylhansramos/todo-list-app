import { Component, Input } from '@angular/core';
import { Task } from '../../shared/models/task';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';
import { TaskService } from '../task/task.service';
import { EventService } from '../EventService';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../shared/pipes/filter.pipe';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskListItemComponent, CommonModule, FilterPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() tasks : Task[] = [];
  filter : string = "All";

  constructor(private taskService : TaskService, private eventService : EventService){
    this.taskService.getAllTasks().subscribe((data)=>{
      this.tasks = data
    })

    this.eventService.filter.subscribe((data)=>{
      this.filter = data;
    })
  }

}
