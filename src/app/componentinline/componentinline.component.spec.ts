import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentinlineComponent } from './componentinline.component';

describe('ComponentinlineComponent', () => {
  let component: ComponentinlineComponent;
  let fixture: ComponentFixture<ComponentinlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentinlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentinlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
