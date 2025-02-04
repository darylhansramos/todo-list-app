import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class GuardService implements CanDeactivate<EditTaskComponent>{

  constructor() { }

  canDeactivate(component:EditTaskComponent,
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean 
      {
      return component.canExit();
    }
}
