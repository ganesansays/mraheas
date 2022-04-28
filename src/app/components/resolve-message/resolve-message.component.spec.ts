import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveMessageComponent } from './resolve-message.component';

describe('ResolveMessageComponent', () => {
  let component: ResolveMessageComponent;
  let fixture: ComponentFixture<ResolveMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolveMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
