import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentForNewmoduleComponent } from './component-for-newmodule.component';

describe('ComponentForNewmoduleComponent', () => {
  let component: ComponentForNewmoduleComponent;
  let fixture: ComponentFixture<ComponentForNewmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentForNewmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentForNewmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
