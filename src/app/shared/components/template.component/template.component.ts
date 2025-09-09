import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared-module';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss',
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class TemplateComponent {

}
