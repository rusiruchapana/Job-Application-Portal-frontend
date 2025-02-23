import { Routes } from '@angular/router';
import { JobListComponent } from './pages/job-list/job-list.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobApplyComponent } from './pages/job-apply/job-apply.component';

export const routes: Routes = [
    {path: '', component: JobListComponent},
    {path: 'job/:id' , component: JobDetailsComponent},
    {path: 'apply/:id' , component: JobApplyComponent},
    {
        path: 'admin',
        loadComponent: ()=> import('./pages/admin-dashboard/admin-dashboard.component')
        .then(m=> m.AdminDashboardComponent)
    }
];
