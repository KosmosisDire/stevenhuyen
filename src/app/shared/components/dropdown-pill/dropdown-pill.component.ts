import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dropdown-pill',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './dropdown-pill.component.html',
  styleUrls: ['./dropdown-pill.component.scss']
})
export class DropdownPillComponent {
  @Input() title: string = 'temporary title';
  isOpen = false;    
  showContent = false;  

  private readonly animationDuration = 200; // ms

  toggleOpen() {
    if (!this.isOpen) {
      this.isOpen = true;
      setTimeout(() => this.showContent = true, this.animationDuration);
    } else {
      this.showContent = false;
      setTimeout(() => this.isOpen = false, 50);
    }
  }
}
