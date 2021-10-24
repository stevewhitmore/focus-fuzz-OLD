import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ff-sound-wrapper',
  templateUrl: './sound-wrapper.component.html',
  styleUrls: ['./sound-wrapper.component.scss']
})
export class SoundWrapperComponent implements OnChanges {
  @Input() audioFile: any
  isPaused = true;
  soundName = 'No Name'
  volume = new FormControl()
  sound: any

  ngOnChanges(changes: SimpleChanges): void {
    const soundChanges = changes['audioFile'].currentValue

    if (soundChanges && soundChanges.source) {
      console.log(soundChanges)
      this.sound = new Audio(this.audioFile.source)
      this.soundName = this.audioFile.name
      this.volume.setValue( 50 )
    }
  }

  playPause() {
    this.isPaused = !this.isPaused
    if (this.sound.paused) {
      this.sound.play()
    } else {
      this.sound.pause()
    }
    console.log(this.volume.value)
  }

  adjustVolume(slider: any) {
    this.sound.volume = this.volume.value / 100
    console.log(this.volume.value)
  }

}
