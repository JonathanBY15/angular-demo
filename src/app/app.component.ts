import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { JobEditFormComponent } from "./components/job-edit-form/job-edit-form.component";
import { ModalButtonComponent } from "./components/job-card/job-card.component";
import { JobStatusBoxComponent } from "./components/job-status-box/job-status-box.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, JobEditFormComponent, ModalButtonComponent, JobStatusBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
