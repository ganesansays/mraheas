import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialWelfareComponent } from './social-welfare.component';

describe('SocialWelfareComponent', () => {
  let component: SocialWelfareComponent;
  let fixture: ComponentFixture<SocialWelfareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialWelfareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialWelfareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
