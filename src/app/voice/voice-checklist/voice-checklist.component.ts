import { Component, OnInit } from '@angular/core';
import { IChecklist } from '../../shared/checklist-dumb/checklist';
import { VOICE_CHECKLIST } from './../config/checklist';

@Component({
  selector: 'app-checklist',
  templateUrl: './voice-checklist.component.html'
})
export class VoiceChecklistComponent implements OnInit {

  voiceConfig: IChecklist = VOICE_CHECKLIST;

  constructor() {}

  ngOnInit(): void {
    console.log(VOICE_CHECKLIST);
  }

}
