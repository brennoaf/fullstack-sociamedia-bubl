import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLoginContentComponent } from './after-login-content.component';

describe('AfterLoginContentComponent', () => {
  let component: AfterLoginContentComponent;
  let fixture: ComponentFixture<AfterLoginContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfterLoginContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterLoginContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
