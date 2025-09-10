import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './components/template.component/template.component';

@NgModule({
  declarations: [
    ],
  imports: [
    CommonModule,
    TemplateComponent
  ],
  exports: [
    TemplateComponent
    ]
})
export class SharedModule { }
