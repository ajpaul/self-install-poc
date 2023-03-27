import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceTutorialComponent } from './voice-tutorial.component';

describe('VoiceTutorialComponent', () => {
  let component: VoiceTutorialComponent;
  let fixture: ComponentFixture<VoiceTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
