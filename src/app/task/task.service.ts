import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../shared/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = 'http://localhost:3000/todos';
  constructor(private http : HttpClient) { }
  
  getAllTasks(){
    return this.http.get<Task[]>(this.url);
  }


  createTask(data:Task){
    return this.http.post(this.url, data);
  }

  getTaskById(id:Number){
    return this.http.get<Task>(`${this.url}/${id}`);
  }

  updateTask(data:Task){
    return this.http.put<Task>(`${this.url}/${data.id}`, data);
  }

  deleteTask(id:Number|undefined){
    return this.http.delete<Task>(`${this.url}/${id}`)
  }
}
