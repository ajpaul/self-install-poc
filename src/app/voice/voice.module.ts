import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { VoiceRoutingModule } from './voice-routing.module';
import { VoiceTutorialComponent } from './voice-tutorial/voice-tutorial.component';

@NgModule({
  declarations: [
    VoiceTutorialComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VoiceRoutingModule
  ]
})
export class VoiceModule { }
