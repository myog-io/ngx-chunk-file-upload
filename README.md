# @myog-io/ngx-chunk-file-upload [![npm version](https://badge.fury.io/js/%40myog-io%2Fngx-chunk-file-upload-base.svg)](https://badge.fury.io/js/%40myog-io%2Fngx-chunk-file-upload-base) [![npm downloads](https://img.shields.io/npm/dm/@myog-io/ngx-chunk-file-upload.svg)](https://npmjs.org/@myog-io/ngx-chunk-file-upload)

This Repository it's a fork from [ng2-file-upload from valor software](https://github.com/valor-software/ng2-file-upload)
We want to continue mantaining this repository, any help is welcome!

[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://github.com/mgechev/angular2-style-guide)
[![Build Status](https://travis-ci.org/myog-io/ngx-chunk-file-upload.svg?branch=master)](https://travis-ci.org/myog-io/ngx-chunk-file-upload.svg?branch=master)
[![Dependency Status](https://david-dm.org/myog-io/ngx-chunk-file-upload.svg)](https://david-dm.org/myog-io/ngx-chunk-file-upload)

## Quick start

1. A recommended way to install ***@myog-io/ngx-chunk-file-upload*** is through [npm](https://www.npmjs.com/search?q=@myog-io/ngx-chunk-file-upload) package manager using the following command:

  `npm i @myog-io/ngx-chunk-file-upload --save`

  Alternatively, you can [download it in a ZIP file](https://github.com/myog-io/ngx-chunk-file-upload/archive/master.zip).

2. Currently `@myog-io/ngx-chunk-file-upload` contains two directives: `ngx-file-select` and `ngx-file-drop`. `ngx-file-select` is used for 'file-input' field of form and
  `ngx-file-drop` is used for area that will be used for dropping of file or files.

3. More information regarding using of ***@myog-io/ngx-chunk-file-upload*** is located in
  [demo](http://valor-software.github.io/@myog-io/ngx-chunk-file-upload/) and [demo sources](https://github.com/myog-io/ngx-chunk-file-upload/tree/master/demo).
  
## Using ***@myog-io/ngx-chunk-file-upload*** in a project

1. Install as shown in the above section.

2. Import `FileUploadModule` into the module that declares the component using ***@myog-io/ngx-chunk-file-upload***:

```import { FileUploadModule } from '@myog-io/ngx-chunk-file-upload';```

3. Add it to `[imports]` under `@NgModule`:

```imports: [ ... FileUploadModule, ... ]```

4. Import `FileUploader` into the component:

```import {  FileUploader } from '@myog-io/ngx-chunk-file-upload';```

5. Create a variable for the API url:

```const URL = 'path_to_api';```

6. Initialize it:

```public uploader:FileUploader = new FileUploader({url: URL}); ```

## API for `ngxFileSelect`

### Properties

  - `uploader` - (`FileUploader`) - uploader object. See using in [demo](https://github.com/myog-io/ngx-chunk-file-upload/blob/master/demo/components/file-upload/simple-demo.ts)

### Events
 - `onFileSelected` - fires when files are selected and added to the uploader queue

## API for `ngxFileDrop`

### Properties

  - `uploader` - (`FileUploader`) - uploader object. See using in [demo](https://github.com/myog-io/ngx-chunk-file-upload/blob/master/demo/components/file-upload/simple-demo.ts)


  1. `uploaderService` - Your own uploaderService extending FileUploaderService
  2. `authToken` - Auth token that will be applied as 'Authorization' header during file send.
  3. `disableMultipart` - If 'true', disable using a multipart form for file upload and instead stream the file. Some APIs (e.g. Amazon S3) may expect the file to be streamed rather than sent via a form. Defaults to false.
  4. `isHTML5` - item alias (form name redefenition)
 
  

### Events

  - `fileOver` - it fires during 'over' and 'out' events for Drop Area; returns `boolean`: `true` if file is over Drop Area, `false` in case of out.
  See using in [ts demo](https://github.com/myog-io/ngx-chunk-file-upload/blob/master/demo/components/file-upload/simple-demo.ts) and
  [html demo](https://github.com/myog-io/ngx-chunk-file-upload/blob/master/demo/components/file-upload/simple-demo.html)
  - `onFileDrop` - it fires after a file has been dropped on a Drop Area; you can pass in `$event` to get the list of files that were dropped. i.e. `(onFileDrop)="dropped($event)"`

### UploaderService Example
 
```typescript
import { Injectable } from '@angular/core';
import {
  FileUploaderService,
  FileItem,
  FileUploaderOptions,
  UploaderServiceOptions,
  UploaderLinksOptions,
} from '@myog-io/ngx-chunk-file-upload';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SimpleDemoService extends FileUploaderService {
  /**
   * Links for the Post of file, this links will go trough Interceptor, 
   * you can manipulate if necessary 
   */
  public links: UploaderLinksOptions = {
		downloadEntry: '/file/#id#/',
		updateEntry: '/file/#id#/',
		createEntry: '/file/',
		deleteEntry: '/file/#id#/',
	};
  /**
   * Uploader Options
   */
  public options: UploaderServiceOptions = {
    createMethod: 'POST',
    updateMethod: 'PATCH',
    authorizationHeaderName: 'Authorization',
    tokenPattern: 'Bearer #token#',
    token: null,
    chunkSize: 1024 * 1024 * 3,
    bytesParamName: 'bytes',
    totalChunkParamName: 'total_chunks',
    currentChunkParamName: 'current_chunk',
    contentTypeParamName: 'content_type',
    fileParamName: 'file',
    extensionParamName: 'extension',
    idAttribute: 'id'
  };
  constructor(protected http: HttpClient) {
    super(http);
    this.init(this.links, this.options);
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
```


# Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/myog-io/ngx-chunk-file-upload/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

## Using/Sending Chunk Files Feature
  
  If you want to send the files chunked you can just set the chunk paramets on the uploader object

  If your chunk request changes the link after the first request you should use this code
  ```typescript
  this.uploader.onCompleteChunk = (item,response,status,headers)=>{
        response = JSON.parse(response);
        if(response['id']){
          item.setId(response['id']);
        }
    }
  ```

### Code snippet on how to use the Chunk File Feature on your code
  The Chunk functions are inside the Service, ```UploaderServiceOptions```
  ```typescript
    ...
    import { FileUploader } from '@myog-io/ngx-chunk-file-upload';
    ...
    export class SimpleDemoComponent {
      ...
      uploader:FileUploader;
      ...
      // SimpleDemoService is your Service to handle the Upload
      constructor (simpleDemoFileUploaderService: SimpleDemoService) {
        ...
          this.uploader = new FileUploader({
            uploaderService: simpleDemoFileUploaderService,
            authToken: 'pre_token',
            disableMultipart: false,
            isHTML5: true,
          });
          this.uploader.onBeforeUploadItem = (item) => {
              // If you use credentials this might help you with the "Access-Control-Allow-Origin" error
              item.withCredentials = false;
          };
          this.uploader.onCompleteChunk = (item, response, status, headers) => {
            //Insert the Logic here to start uploading next chunks
            // Example, setting the ID of the File uploaded and chaning the link for the next request
            // In my Case the API is using a put method with the link containing the PK of the object
            response = JSON.parse(response);
            if (response['id']) {
              // After settting ID, the Url will be changed
              item.setId(response['id']);
            }
          };
          this.uploader.onErrorItem = (item, response, status, headers) => {
             // Treat the error on the upload
             // On the chunk method we try to upload a chunk for 10 times before triggering this error
          };
          this.uploader.onRemoveItem = (item) => {
             // Treat the file removal from the server
          };
        ...
      }
  ```


### License

The MIT License (see the [LICENSE](https://github.com/myog-io/ngx-chunk-file-upload/blob/master/LICENSE) file for the full text)
