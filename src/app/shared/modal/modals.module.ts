import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    DeleteModalComponent
  ]
})
export class ModalsModule { }
