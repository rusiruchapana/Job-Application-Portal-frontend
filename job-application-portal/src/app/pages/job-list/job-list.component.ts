import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-list',
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {

  jobs: any[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }

  logJob(job: any): void {
    console.log(job);
  }

}
