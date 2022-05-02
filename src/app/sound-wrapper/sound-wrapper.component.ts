import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ff-sound-wrapper',
  templateUrl: './sound-wrapper.component.html',
  styleUrls: ['./sound-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoundWrapperComponent implements OnChanges {
  @Input() audioFile: any
  @Input() playStatus: any;
  soundName = 'No Name'
  volume = new FormControl()
  sound: any

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['audioFile']) {
      const audioFileChanges = changes['audioFile'].currentValue;
      if (audioFileChanges && audioFileChanges.source) {
        this.sound = new Audio(audioFileChanges.source);
        this.sound.loop = true;
        this.soundName = audioFileChanges.name;
        this.volume.setValue(0);
        this.sound.volume = 0;
        
        if (audioFileChanges.id === 1) {
          this.volume.setValue(100);
          this.sound.volume = 1;
        }
      }
    }

    if (changes['playStatus'].currentValue) {
      if (changes['playStatus'].currentValue.isPaused) {
        this.sound.pause();
      } else {
        this.sound.play();
      }
    }
  }

  adjustVolume() {
    this.sound.volume = this.volume.value / 100
  }

}
