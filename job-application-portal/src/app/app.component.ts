import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobApplyComponent } from "./pages/job-apply/job-apply.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  JobApplyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'job-application-portal';
}
