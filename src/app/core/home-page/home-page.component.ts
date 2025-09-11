import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { ResumeTextComponent } from "../../shared/components/resume-text/resume-text.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  imports: [SharedModule, ResumeTextComponent],
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
