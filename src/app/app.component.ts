import { Component } from '@angular/core';
import { MatChipEvent, MatChipSelectionChange } from '@angular/material/chips';
import { Chips } from 'component-library';

@Component({
  selector: 'cg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ComponentGallery';

  chipItems1: Chips[] = [
    {
      color: 'bg-green',
      label: 'My',
      value: 'my',
    },
    {
      color: 'bg-red',
      label: 'Name',
      value: 'name',
    },
    {
      color: 'bg-blue',
      label: 'is',
      value: 'is',
    },
    {
      color: 'bg-magenta',
      label: 'Devendra',
      value: 'devendra',
    },
  ];

  chipItems2: Chips[] = [
    {
      color: 'bg-green',
      label: 'My',
      value: 'my',
    },
    {
      color: 'bg-red',
      label: 'Name',
      value: 'name',
    },
    {
      color: 'bg-blue',
      label: 'is',
      value: 'is',
    },
    {
      color: 'bg-magenta',
      label: 'Devendra',
      value: 'devendra',
    },
  ];

  chipItems3: Chips[] = [
    {
      color: 'bg-green',
      label: 'My',
      value: 'my',
    },
    {
      color: 'bg-red',
      label: 'Name',
      value: 'name',
    },
    {
      color: 'bg-blue',
      label: 'is',
      value: 'is',
    },
    {
      color: 'bg-magenta',
      label: 'Devendra',
      value: 'devendra',
    },
  ];

  selectedItem: any;
  code1: string = `<cl-chips [items]="chipItems1"></cl-chips>`;
  code2: string = `<cl-chips [items]="chipItems2" [isRemovable]="true" (removed)="onRemoved($event)"></cl-chips>`;
  code3: string = `<cl-chips [items]="chipItems3" [isSelectable]="true" (selectionChange)="onSelectionChnage($event)"></cl-chips>`;
  
  onRemoved(event: MatChipEvent): void {
    const findIndex = this.chipItems2.findIndex(
      (a) => a.value === event.chip.value
    );
    if (findIndex > -1) {
      this.chipItems2.splice(findIndex, 1);
    }
  }

  onSelectionChnage(event: MatChipSelectionChange): void {
    this.selectedItem = event.source.value;
  }
}
