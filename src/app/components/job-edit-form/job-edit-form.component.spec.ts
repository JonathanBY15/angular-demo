import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobEditFormComponent } from './job-edit-form.component';

describe('JobEditFormComponent', () => {
  let component: JobEditFormComponent;
  let fixture: ComponentFixture<JobEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobEditFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
