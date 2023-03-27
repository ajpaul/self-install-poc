import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoiceChecklistComponent } from './voice-checklist/voice-checklist.component';
import { VoiceTutorialComponent } from './voice-tutorial/voice-tutorial.component';


const routes: Routes = [
    {
        path: '',
        component: VoiceChecklistComponent
    },
    {
        path: 'plug-in-phone',
        component: VoiceTutorialComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoiceRoutingModule { }