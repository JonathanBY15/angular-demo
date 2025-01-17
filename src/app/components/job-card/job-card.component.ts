// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-modal-button',
//   standalone: true,
//   imports: [],
//   templateUrl: './modal-button.component.html',
//   styleUrl: './modal-button.component.css'
// })
// export class ModalButtonComponent {

// }




import { Component } from '@angular/core';

@Component({
  selector: 'job-card',
  standalone: true,
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class ModalButtonComponent {
  isEditMode: boolean = false;

  toggleEditMode(event: Event): void {
    this.isEditMode = (event.target as HTMLInputElement).checked;
  }
}


