import { Component } from '@angular/core';

import { FormGroup,FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../shared/models/task';
import { TaskService } from '../task/task.service';
import { Router } from '@angular/router';
import { createInvalidDueDateValidator } from '../../shared/validators/invalidDueDate';

const pastDueDate = createInvalidDueDateValidator;

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  task :Task ={
    id : 0,
    name: '',
    description: '',
    dueDate: new Date,
    isCompleted: false
  }

  taskForm = new FormGroup({
    senderTaskNameControl: new FormControl('', [Validators.required, Validators.maxLength(32)]),
    senderTaskDescriptionControl: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    senderTaskDueDateControl: new FormControl('', [Validators.required, pastDueDate])
  });

  constructor(private taskService : TaskService, private router : Router){
    
  }
  createTask(){
    this.taskService.getAllTasks().subscribe(data => {
      this.task.id=Math.max.apply(Math, data.map(obj => obj.id))+1; 
    })
    this.taskService.createTask(this.task).subscribe({
      next:(data) => {
        this.router.navigate(["todos"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
  
}
