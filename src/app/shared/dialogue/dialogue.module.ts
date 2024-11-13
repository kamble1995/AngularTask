import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { DialogueComponent } from './dialogue.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DialogueComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],

})
export class DialogueModule { }
