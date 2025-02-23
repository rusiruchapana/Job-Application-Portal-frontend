import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobApplyComponent } from "./pages/job-apply/job-apply.component";
import { JobListComponent } from "./pages/job-list/job-list.component";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JobApplyComponent, JobListComponent, AdminDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'job-application-portal';
}
