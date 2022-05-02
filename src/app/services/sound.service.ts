import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
  
  getSoundFiles(): Observable<any> {
    return this.http.get('assets/files-list.json')
    .pipe(
      map((sounds: any) => sounds.filter((sound: any) => sound.id === 1)), //  This is all I need right now
    )
  }
}
