import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Image240x240Module } from "../../projects/image240x240/src/lib/image240x240.module";
import { UploadImageModule } from "../../projects/upload-image/src/lib/upload-image.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        Image240x240Module,
        UploadImageModule
    ]
})
export class AppModule { }
