import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-list',
  imports: [],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit{

  jobs: any[] = [];

  constructor(private jobService: JobService){}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(data =>{
      this.jobs = data;
    });
  }

}
