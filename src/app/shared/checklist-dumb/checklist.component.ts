import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IChecklist } from './checklist';

@Component({
  selector: 'si-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent {

  @Input() listConfig!: IChecklist; 
  @Output() setupClick = new EventEmitter(); // really just to fire an event, not to pass any data

  // to do - the checklist is not always first, therefore it can't be the sole driver for the tutorial flow, right?
  // swaps will have disconnect screens first, that require routing logic

  setupClickEvent() {
    this.setupClick.emit();
  }
}
