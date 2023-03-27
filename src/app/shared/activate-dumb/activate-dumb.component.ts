import { Component, Input } from '@angular/core';
import { IActivate } from './activate';

@Component({
  selector: 'si-activate-dumb',
  templateUrl: './activate-dumb.component.html',
  styleUrls: ['./activate-dumb.component.scss']
})
export class ActivateDumbComponent {
  @Input() activateConfig!: IActivate;
}
