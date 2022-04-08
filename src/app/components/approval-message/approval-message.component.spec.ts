import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalMessageComponent } from './approval-message.component';

describe('ApprovalMessageComponent', () => {
  let component: ApprovalMessageComponent;
  let fixture: ComponentFixture<ApprovalMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
