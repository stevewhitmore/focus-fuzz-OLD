import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map , tap} from 'rxjs/operators'

import { audioFiles } from 'src/assets/sound-files/files-list';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  constructor() { }

  getSoundFiles() {
    return of(audioFiles()).pipe(
      // map((item: any) => item.source.volume = 0.5)
      tap(console.log)
    )
  }
}
