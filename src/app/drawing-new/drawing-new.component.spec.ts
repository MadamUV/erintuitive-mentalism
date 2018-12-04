import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingNewComponent } from './drawing-new.component';

describe('DrawingNewComponent', () => {
  let component: DrawingNewComponent;
  let fixture: ComponentFixture<DrawingNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
