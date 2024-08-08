import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ContactComponent]
})
export class TemplateModule { }
