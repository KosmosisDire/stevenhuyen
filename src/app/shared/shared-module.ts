import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './components/template.component/template.component';
import { HeaderComponent } from './components/header/header.component';
import { SummaryContainerComponent } from './components/summary-container.component/summary-container.component';
import { ResumeTextComponent } from './components/resume-text/resume-text.component';
import { TitleContainerComponent } from './components/title-container/title-container.component';
import { DropdownPillComponent } from './components/dropdown-pill/dropdown-pill.component';

@NgModule({
  declarations: [
    ],
  imports: [
    CommonModule,
    TemplateComponent,
    HeaderComponent,
    SummaryContainerComponent,
    ResumeTextComponent,
    TitleContainerComponent,
    DropdownPillComponent,
  ],
  exports: [
    TemplateComponent,
    HeaderComponent,
    SummaryContainerComponent,
    ResumeTextComponent,
    TitleContainerComponent,
    DropdownPillComponent,
    ]
})
export class SharedModule { }
