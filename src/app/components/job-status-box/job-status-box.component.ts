import { Component } from '@angular/core';
import { ModalButtonComponent } from '../job-card/job-card.component';

@Component({
  selector: 'job-status-box',
  standalone: true,
  imports: [ModalButtonComponent],
  templateUrl: './job-status-box.component.html',
  styleUrl: './job-status-box.component.css'
})
export class JobStatusBoxComponent {

}
