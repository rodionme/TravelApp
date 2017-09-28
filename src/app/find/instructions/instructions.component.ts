import { Component, EventEmitter, HostBinding, Output } from '@angular/core';

@Component({
  selector: 'instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent {
  @HostBinding('class') cssClasses = 'search-instructions-wrapper overlay-panel overlay-panel--expanded';
  @Output() onInstructionsClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeInstructions(): void {
    this.onInstructionsClose.emit();
  }
}
