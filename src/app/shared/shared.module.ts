import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from './checklist-dumb/checklist.component';
import { ActivateDumbComponent } from './activate-dumb/activate-dumb.component';
import { TutorialDumbComponent } from './tutorial-dumb/tutorial-dumb.component';

@NgModule({
  declarations: [
    ChecklistComponent,
    ActivateDumbComponent,
    TutorialDumbComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChecklistComponent,
    ActivateDumbComponent,
    TutorialDumbComponent
  ]
})
export class SharedModule { }
