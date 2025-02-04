import { Component, OnInit } from '@angular/core';
import { Task } from '../../shared/models/task';
import { TaskService } from '../task/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { createInvalidDueDateValidator } from '../../shared/validators/invalidDueDate';

const pastDueDate = createInvalidDueDateValidator;

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit{
  task : Task ={
    id: 0,
    name: '',
    description: '',
    dueDate: new Date,
    isCompleted: false
  }

  isSaved : boolean = false;

  taskForm : FormGroup = new FormGroup({
      senderTaskNameControl: new FormControl('', [Validators.required, Validators.maxLength(32)]),
      senderTaskDescriptionControl: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      senderTaskDueDateControl: new FormControl('', [Validators.required, pastDueDate])
  });
  
  constructor(private taskService : TaskService, private router : Router, private route : ActivatedRoute){

  }

  datePipe : DatePipe = new DatePipe("en-us");

  ngOnInit(): void {
    const id = this.route.paramMap.subscribe((params)=>{
      let id = Number(params.get('id'));
      this.getById(id);
    })
    
  }

  getById(id:Number){
    this.taskService.getTaskById(id).subscribe((data)=>{
      this.task = data;
      this.task.dueDate = this.datePipe.transform(this.task.dueDate, 'YYYY-MM-dd');
    })
  }

  updateTask(){
    this.taskService.updateTask(this.task).subscribe({
      next:()=>{
        this.isSaved = true;
        this.router.navigate(["todos"])
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  canExit(){
    debugger
    if (this.taskForm.dirty && !this.isSaved)
    {
      if (confirm("You have pending changes.")) {
        this.isSaved = false;
        return true
      } else {
        return false
      }
    }
    this.isSaved = false;
    return true;
    
  }
}
