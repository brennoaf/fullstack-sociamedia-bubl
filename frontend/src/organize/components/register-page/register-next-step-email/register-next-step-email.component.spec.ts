import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNextStepEmailComponent } from './register-next-step-email.component';

describe('RegisterNextStepEmailComponent', () => {
  let component: RegisterNextStepEmailComponent;
  let fixture: ComponentFixture<RegisterNextStepEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterNextStepEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterNextStepEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
