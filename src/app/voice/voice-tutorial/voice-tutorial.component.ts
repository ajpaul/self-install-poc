import { Component, OnInit } from '@angular/core';
import { ITutorialScreen } from 'src/app/shared/tutorial-dumb/tutorial';
import * as screens from '../config/tutorial-screens';

@Component({
  selector: 'app-voice-tutorial',
  templateUrl: './voice-tutorial.component.html',
  styleUrls: ['./voice-tutorial.component.scss']
})
export class VoiceTutorialComponent implements OnInit {

  voiceConfig!: ITutorialScreen

  constructor(){}

  ngOnInit(): void {
     this.voiceConfig = screens.VoiceTutorialScreens.PLUG_IN_PHONE;
  }
  
  /**
   * ngOnInit
   * start at Plug In Phone
   * on route, go to Connect Phone Cable
   * on route, check if voice is activate and either
   * - activate
   * - show phone is ready screen
   */
}
