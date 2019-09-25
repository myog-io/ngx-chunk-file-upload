import { Injectable } from '@angular/core';
//import {
//	FileUploaderService,
//	FileItem,
//	FileUploaderOptions,
//	UploaderServiceOptions,
//	UploaderLinksOptions,
//} from 'ngx-chunk-file-upload';
import {
	FileUploaderService,
	FileItem,
	FileUploaderOptions,
	UploaderServiceOptions,
	UploaderLinksOptions,
} from '../../../../../src/ngx-chunk-file-upload';
import { HttpClient } from '@angular/common/http';

const URL = '/api/';
//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Injectable()
export class SimpleDemoService extends FileUploaderService {
	public links: UploaderLinksOptions = {
		downloadEntry: URL + '#id#/',
		updateEntry: URL + '#id#/',
		createEntry: URL + '',
		deleteEntry: URL + '#id#/',
	};

	public options: UploaderServiceOptions = {
		createMethod: 'POST',
		updateMethod: 'PATCH',
		authorizationHeaderName: 'Authorization',
		tokenPattern: 'Bearer #token#',
		token: null,
		chunkSize: 1024 * 1024 * 3,
		totalChunkParamName: 'total_chunks',
		currentChunkParamName: 'current_chunk',
		fileParamName: 'file',
		idAttribute: 'id',
	};
	constructor(protected http: HttpClient) {
		super(http);
	}

	/**
	 * Determines whether before upload on
	 * Place your Authentiaction Tactics here
	 * @param item
	 * @param options
	 * @returns before upload
	 */
	public onBeforeUpload(
		item: FileItem,
		options: FileUploaderOptions,
	): Promise<any> {
		return new Promise((resolve, reject) => {
			resolve(true);
		});
	}
}
