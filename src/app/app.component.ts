import { Component } from '@angular/core';
import { Chips } from 'component-library';

@Component({
  selector: 'cg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ComponentGallery';

  chipItems: Chips[] = [
    {
      color: 'accent',
      label: 'Devendra',
      value: 'devendram'
    }
  ]
}
