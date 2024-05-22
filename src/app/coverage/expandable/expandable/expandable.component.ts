import { Component, EventEmitter, NgZone, Output } from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent {
  @Output() expandButtonEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  public isExpanded = false;

  constructor(private zone: NgZone) {}

  handleItemToggle() {
    this.zone.run(() => {
      this.isExpanded = !this.isExpanded;
      console.log('Expanded:: ', this.isExpanded);

      this.expandButtonEventEmitter.emit({
        isExpanded: this.isExpanded,
      });
    });
  }
}
