import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentinlinestyleAndInlinetemplateComponent } from './componentinlinestyle-and-inlinetemplate.component';

describe('ComponentinlinestyleAndInlinetemplateComponent', () => {
  let component: ComponentinlinestyleAndInlinetemplateComponent;
  let fixture: ComponentFixture<ComponentinlinestyleAndInlinetemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentinlinestyleAndInlinetemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentinlinestyleAndInlinetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
