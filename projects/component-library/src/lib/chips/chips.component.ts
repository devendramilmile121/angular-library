import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chips } from './types/chip-type';
import { MatChipSelectionChange } from '@angular/material/chips';

@Component({
  selector: 'cl-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css'],
})
export class ChipsComponent {
  @Input() ariaLabel: string = 'Chips Container';
  @Input() items: Chips[] = [];
  @Input() isRemovable: boolean = false;
  @Input() isSelectable: boolean = false;

  @Output() selectionChange: EventEmitter<MatChipSelectionChange> =
    new EventEmitter();

  selectionChanged(event: MatChipSelectionChange) {
    this.selectionChange.emit(event);
  }
}
