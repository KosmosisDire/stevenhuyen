import { Component, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-music-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './music.page.component.html',
  styleUrls: ['./music.page.component.scss'],
})
export class MusicPageComponent implements AfterViewInit {
  pdfFiles: { name: string; path: SafeResourceUrl }[] = [];

  private rawFiles = [
    { name: 'Autumn Leaves', path: 'assets/pdfs/Autumn Leaves.pdf' },
    { name: 'Caprice in D Minor', path: 'assets/pdfs/Caprice in D Minor by Matteo Carcassi.pdf' },
    { name: 'Mariage d\'Amour', path: 'assets/pdfs/Mariage_d\'Amour.pdf' },
    { name: 'Gymnopédie No.1', path: 'assets/pdfs/Gymnopedie.pdf' },
    { name: 'Gymnopédie No.1', path: 'assets/pdfs/Prelude 1.pdf' },
    { name: 'Rumba Flamenco by Romano', path: 'assets/pdfs/Rumba Flamenco by Romano.pdf' },
    { name: 'Danza Brasiliera', path: 'assets/pdfs/Danza Brasília.pdf' },
    { name: 'Fly me to the moon', path: 'assets/pdfs/Fly me to the moon.pdf' },
    { name: 'Paul Anka', path: 'assets/pdfs/Paul Anka Tabs.pdf' },
    { name: 'Fly me to the moon', path: 'assets/pdfs/Recuerdos de la Alhambra.pdf' }    
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
