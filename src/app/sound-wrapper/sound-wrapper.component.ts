import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SoundService } from '../services/sound.service';

@Component({
  selector: 'ff-sound-wrapper',
  templateUrl: './sound-wrapper.component.html',
  styleUrls: ['./sound-wrapper.component.scss']
})
export class SoundWrapperComponent implements OnInit {

  isPaused = true;
  soundName = 'No Name'
  volume = new FormControl()
  audioObj: any;

  // @ViewChild('soundItem', { static: true }) soundItem: ElementRef

  constructor(private soundService: SoundService) { }

  ngOnInit(): void {
    this.getSoundFile()

    this.audioObj.volume = 0.5

    this.volume.setValue('50')
  }

  getSoundFile() {
    this.audioObj = new Audio('./assets/sound-files/north-sea.wav');
  }

  playPause() {
    this.isPaused = !this.isPaused
    if (this.audioObj.paused) {
      this.audioObj.play()
    } else {
      this.audioObj.pause()
    }
    console.log(this.volume.value)
  }

  adjustVolume(slider: any) {
    this.audioObj.volume = this.volume.value / 100
    // this.volume.registerOnChange
    
    // console.log(slider)
    console.log(this.audioObj.volume)
    // this.audioObj
  }

}
