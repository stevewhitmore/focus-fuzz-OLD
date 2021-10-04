import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { map , tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  constructor(private http: HttpClient) { }

  getSoundFiles(): Observable<any[]> {
    return this.http.get('assets/files-list.json').pipe(
      map((soundObjects: any) => soundObjects.map((item: any) => item.sound = new Audio(item.sound)))
    )
    
    // return of(audioFiles()).pipe(
    //   // map((item: any) => item['source'].volume = 0.5),
    //   map((soundObjects: any) => soundObjects.map((item: any) => console.log(item))),
    // )
  }
}
