import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AddTaskComponent } from "../add-task/add-task.component";
import { EditTaskComponent } from "../edit-task/edit-task.component";
import { GuardService } from "../guard.service";
import { TaskResolverService } from "../task-resolver.service";

export const homeRoutes: Routes = [
    {
        path: '',
        component : HomeComponent,
        resolve: { tasks: TaskResolverService }
    },
    {
        path: 'add',
        component: AddTaskComponent,
    },
    {
        path: 'edit/:id',
        component: EditTaskComponent,
        canDeactivate:[GuardService]
    },
]