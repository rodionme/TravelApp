import { Component, HostBinding } from '@angular/core';

import { EVENT_NAME, EventService } from '../../services/event.service';

@Component({
  selector: 'instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent {
  @HostBinding('class') cssClasses = 'search-instructions-wrapper overlay-panel overlay-panel--expanded';

  constructor(
    private eventService: EventService,
  ) {}

  closeInstructions(): void {
    this.eventService.event({ name: EVENT_NAME.instructionsClosed });
  }
}
