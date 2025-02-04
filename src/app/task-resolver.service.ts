import { Injectable } from '@angular/core';
import { TaskService } from './task/task.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskResolverService implements Resolve<any>{

    constructor(private taskService : TaskService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
      debugger
      return this.taskService.getAllTasks().pipe(
        catchError(error => {
          return of('No data');
        })
      );
  }
}
