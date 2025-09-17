import { Component, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-music-page',
  standalone: true,
  imports: [],
  templateUrl: './music.page.component.html',
  styleUrls: ['./music.page.component.scss'],
})
export class MusicPageComponent implements AfterViewInit {
  pdfFiles: { name: string; path: SafeResourceUrl }[] = [];

  private rawFiles = [
    { name: 'Sheet 1', path: 'assets/pdfs/Autumn Leaves.pdf' },
    { name: 'Sheet 2', path: 'assets/pdfs/Caprice in D Minor.pdf' },
    { name: 'Sheet 3', path: 'assets/pdfs/Mariage_d\'Amour.pdf' },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  async ngAfterViewInit(): Promise<void> {
    for (const pdf of this.rawFiles) {
      try {
        const res = await fetch(pdf.path, { method: 'HEAD' });
        if (res.ok) {
          this.pdfFiles.push({
            name: pdf.name,
            path: this.sanitizer.bypassSecurityTrustResourceUrl(encodeURI(pdf.path)),
          });
        } else {
          console.warn('PDF not found:', pdf.name);
          console.warn(res);
        }
      } catch (err) {
        console.warn('Error fetching PDF:', pdf.name, err);
      }
    }
  }
}
