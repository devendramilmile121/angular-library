import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ChipsComponent } from './chips/chips.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ChipsComponent],
  imports: [CommonModule, MatChipsModule, MatFormFieldModule, MatIconModule],
  exports: [ChipsComponent],
})
export class ComponentLibraryModule {}
