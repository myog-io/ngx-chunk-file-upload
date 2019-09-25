import { Component } from '@angular/core';

import { SimpleDemoService } from './simple-demo.service';
import {
	FileUploader, FileItem,
} from '../../../../../src/ngx-chunk-file-upload';

@Component({
	selector: 'simple-demo',
	templateUrl: './simple-demo.html',
})
export class SimpleDemoComponent {

	uploader: FileUploader;
	hasBaseDropZoneOver: boolean;
	hasAnotherDropZoneOver: boolean;
	response: string;

	constructor(simpleDemoFileUploaderService: SimpleDemoService) {
		this.uploader = new FileUploader({
			uploaderService: simpleDemoFileUploaderService,
			authToken: 'pre_token',
			disableMultipart: false,
			isHTML5: true,
		});
		// Have no Idea why, but this removes the error "Access-Control-Allow-Origin"
		this.uploader.onBeforeUploadItem = item => {
			item.withCredentials = false;
		};

		this.uploader.onCompleteChunk = (item: FileItem, response: any, status, headers) => {
			if (response.data.id) {
				item.setId(response.data.id);
			}
		};

		this.uploader.onSuccessItem = (
			item: FileItem,
			response: any,
			status,
			headers,
		) => { };

		this.uploader.onCompleteAll = () => {
			console.log("Queue Completed");
		};

		this.uploader.onErrorItem = (
			item: FileItem,
			response: any,
			status,
			headers,
		) => {
			console.log("Error on uploading item", item);
		};

		this.uploader.onRemoveItem = (item: FileItem) => {
			console.log("Removing Item", item);
		};

		this.hasBaseDropZoneOver = false;
		this.hasAnotherDropZoneOver = false;

		this.response = '';

		this.uploader.response.subscribe(res => this.response = res);
	}

	public fileOverBase(e: any): void {
		this.hasBaseDropZoneOver = e;
	}

	public fileOverAnother(e: any): void {
		this.hasAnotherDropZoneOver = e;
	}
}
