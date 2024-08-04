import { Component } from '@angular/core';
import { JobStatusBoxComponent } from '../job-status-box/job-status-box.component';

@Component({
  selector: 'job-status-box-container',
  standalone: true,
  imports: [JobStatusBoxComponent],
  templateUrl: './job-status-box-container.component.html',
  styleUrl: './job-status-box-container.component.css'
})
export class JobStatusBoxContainerComponent {

}
