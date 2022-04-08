import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionAnalyticsComponent } from './institution-analytics.component';

describe('InstitutionAnalyticsComponent', () => {
  let component: InstitutionAnalyticsComponent;
  let fixture: ComponentFixture<InstitutionAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
