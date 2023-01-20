import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentinlinetempleteComponent } from './componentinlinetemplete.component';

describe('ComponentinlinetempleteComponent', () => {
  let component: ComponentinlinetempleteComponent;
  let fixture: ComponentFixture<ComponentinlinetempleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentinlinetempleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentinlinetempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
