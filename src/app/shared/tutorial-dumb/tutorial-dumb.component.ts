import { Component, Input } from '@angular/core';
import { ITutorialScreen } from './tutorial';

@Component({
  selector: 'si-tutorial-dumb',
  templateUrl: './tutorial-dumb.component.html',
  styleUrls: ['./tutorial-dumb.component.scss']
})
export class TutorialDumbComponent {
  @Input() tutorialConfig!: ITutorialScreen; 
}
