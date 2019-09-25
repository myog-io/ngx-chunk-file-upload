import { TabsModule } from 'ngx-bootstrap/tabs';
import { FileUploadModule } from '../../../src/file-upload/file-upload.module';

import { AppComponent } from './app.component';

import { FileUploadSectionComponent } from './components/file-upload-section';
import { SimpleDemoComponent } from './components/file-upload/simple-demo';

import { SimpleDemoService } from './components/file-upload/simple-demo.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		HttpClientModule,
		FileUploadModule,
		TabsModule.forRoot(),
	],
	declarations: [AppComponent, FileUploadSectionComponent, SimpleDemoComponent],
	bootstrap: [AppComponent],
	providers: [
		SimpleDemoService,
	],
})
export class AppModule {}
