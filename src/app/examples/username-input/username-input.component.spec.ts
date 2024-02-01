import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameInputComponent } from './username-input.component';

describe('UsernameInputComponent', () => {
  let component: UsernameInputComponent;
  let fixture: ComponentFixture<UsernameInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsernameInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsernameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
