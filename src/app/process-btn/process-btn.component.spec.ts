import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessBtnComponent } from './process-btn.component';

describe('ProcessBtnComponent', () => {
  let component: ProcessBtnComponent;
  let fixture: ComponentFixture<ProcessBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
