import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UploadImageComponent } from './upload-image.component';



@NgModule({
  declarations: [UploadImageComponent],
  imports: [
    CommonModule
  ],
  exports: [UploadImageComponent]
})
export class UploadImageModule { }
