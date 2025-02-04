import { Component, Input } from '@angular/core';
import { Task } from '../../shared/models/task';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { TaskService } from '../task/task.service';


@Component({
  selector: 'app-task-list-item',
  standalone: true,
  imports: [RouterModule, DatePipe, CommonModule],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent {
  constructor(private taskService:TaskService){

  }
  @Input() task! : Task;

  get cssClasses(){
    return {'strikeout text-muted': this.task.isCompleted }
  }

  deleteTask(){
    this.taskService.deleteTask(this.task.id).subscribe((data)=>{
    })
    window.location.reload();
  }

  toggleIsCompleted(){
    this.task.isCompleted = !this.task.isCompleted;
    this.taskService.updateTask(this.task).subscribe((data)=>{
    });
  }
}
