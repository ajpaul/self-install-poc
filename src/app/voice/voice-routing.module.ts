import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecklistComponent } from '../shared/checklist-dumb/checklist.component';

const routes: Routes = [
    {
        path: '', // should be /checklist once more features are added
        component: ChecklistComponent,
        data: {
            lob: 'voice'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoiceRoutingModule { }