import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from 'src/app/services/upload-files.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-documents-ben',
  templateUrl: './documents-ben.component.html',
  styleUrls: ['./documents-ben.component.css'],
})
export class DocumentsBenComponent implements OnInit {
  public adresFile?: File;
  public sisbenFile?: File;
  public progress = 0;
  public message = '';
  public fileInfos?: Observable<any>;

  constructor(private uploadService: UploadFilesService) {}

  public ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }

  public selectAdresFile(event: any): void {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      this.adresFile = selectedFiles.item(0);
    }
  }

  public selectSisbenFile(event: any): void {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      this.sisbenFile = selectedFiles.item(0);
    }
  }

  public upload(): void {
    this.progress = 0;
    if (this.adresFile && this.sisbenFile) {
      this.uploadService.upload(this.adresFile, this.sisbenFile).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round((100 * event.loaded) / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            // this.fileInfos = this.uploadService.getFiles();
            console.log('Response service: ', event.body);
          }
        },
        (err: any) => {
          console.log(err);
          this.progress = 0;

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }
        }
      );
    } else {
      this.message = 'Please select files!';
    }
  }
}
