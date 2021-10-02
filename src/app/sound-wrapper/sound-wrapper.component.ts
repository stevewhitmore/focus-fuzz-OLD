import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SoundService } from '../services/sound.service';

@Component({
  selector: 'ff-sound-wrapper',
  templateUrl: './sound-wrapper.component.html',
  styleUrls: ['./sound-wrapper.component.scss']
})
export class SoundWrapperComponent implements OnInit {
  @Input() audioFile: any
  isPaused = true;
  soundName = 'No Name'
  volume = new FormControl()
  sound: any

  // @ViewChild('soundItem', { static: true }) soundItem: ElementRef

  constructor(private soundService: SoundService) { }

  ngOnInit(): void {
    this.getSoundFile()

    this.sound = this.audioFile.source
    this.soundName = this.audioFile.name
    this.volume.setValue( this.sound.volume * 100 )
  }

  getSoundFile() {
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
    // this.volume.registerOnChange
    
    // console.log(slider)
    console.log(this.volume.value)
    // this.audioObj
  }

}
