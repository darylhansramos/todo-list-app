import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path:'todos',
        loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes)
    },
    {
        path:'',
        redirectTo: 'todos',
        pathMatch: 'full'
    },
    {
        path:'**',
        component: NotFoundComponent
    }
];
