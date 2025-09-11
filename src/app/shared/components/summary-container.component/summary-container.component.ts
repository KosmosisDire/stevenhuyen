import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-summary-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-container.component.html',
  styleUrls: ['./summary-container.component.scss']
})
export class SummaryContainerComponent {
  @Input() reverse = false;
  @Input() aGridSize = 1;
  @Input() bGridSize = 2;
  @Input() dyanimicOrientation = false;
  orientation: 'portrait' | 'landscape' = 'landscape';

  @HostListener('window:resize')
  onResize() {
    this.setOrientation();
  }

  ngOnInit() {
    this.setOrientation();
  }

  private setOrientation() {
    if (this.dyanimicOrientation && typeof window !== 'undefined') {
      this.orientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
    }
  }

  getSmallerSectionClass(section: 'a' | 'b'): string {
    if (this.aGridSize === this.bGridSize) {
      return section === 'a' ? 'smaller' : '';
    }
    const smaller = this.aGridSize < this.bGridSize ? 'a' : 'b';
    return section === smaller ? 'smaller' : '';
  }
}
