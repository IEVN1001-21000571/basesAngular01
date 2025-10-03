import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResistenciaComponent } from './resistencia.component';

@NgModule({
  declarations: [
    ResistenciaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ResistenciaComponent
  ]
})
export class ResistenciasModule { }