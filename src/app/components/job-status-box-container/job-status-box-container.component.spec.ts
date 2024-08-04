import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobStatusBoxContainerComponent } from './job-status-box-container.component';

describe('JobStatusBoxContainerComponent', () => {
  let component: JobStatusBoxContainerComponent;
  let fixture: ComponentFixture<JobStatusBoxContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobStatusBoxContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobStatusBoxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
