import { Component } from '@angular/core';
import { TaskFilterComponent } from "../task-filter/task-filter.component";
import { TaskListComponent } from "../task-list/task-list.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskFilterComponent, TaskListComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
