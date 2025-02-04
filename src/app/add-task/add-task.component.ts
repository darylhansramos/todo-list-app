import { Component } from '@angular/core';
import { TaskFormComponent } from "../task-form/task-form.component";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

}
