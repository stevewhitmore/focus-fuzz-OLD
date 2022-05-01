import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SoundService } from './services/sound.service';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  playStatus = { isPaused: true };
  audioFiles$: Observable<any> = new Observable();

  constructor(private soundService: SoundService) { }

  ngOnInit() {
    this.audioFiles$ = this.soundService.getSoundFiles();
  }

  playPause() {
    this.playStatus = { isPaused: !this.playStatus.isPaused };
  }

}
