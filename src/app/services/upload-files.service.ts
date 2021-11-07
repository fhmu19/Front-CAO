import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadFilesService {
  private baseUrl = 'http://localhost:8082/cao-core-api/v1/files';

  constructor(private http: HttpClient) {}

  upload(adresFile: File, sisbenFile: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('imageAdres', adresFile);
    formData.append('imageSisben', sisbenFile);

    const req = new HttpRequest('POST', `${this.baseUrl}`, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
