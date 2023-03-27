import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDumbComponent } from './tutorial-dumb.component';

describe('TutorialDumbComponent', () => {
  let component: TutorialDumbComponent;
  let fixture: ComponentFixture<TutorialDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialDumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
