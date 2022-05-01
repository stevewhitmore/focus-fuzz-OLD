import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

interface SoundFile {
  name: string;
  creditLocation: string;
  creditAuthor: string;
}

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  constructor(private http: HttpClient) { }
  
  getSoundFiles(): Observable<SoundFile[]> {
    return this.http.get('assets/files-list.json') as Observable<SoundFile[]>
  }
}
