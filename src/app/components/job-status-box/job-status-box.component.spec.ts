import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobStatusBoxComponent } from './job-status-box.component';

describe('JobStatusBoxComponent', () => {
  let component: JobStatusBoxComponent;
  let fixture: ComponentFixture<JobStatusBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobStatusBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobStatusBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
