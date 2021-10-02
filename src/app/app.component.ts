import { Component, OnInit } from '@angular/core';
import { SoundService } from './services/sound.service';

@Component({
  selector: 'ff-root',
  template: `
    <h1>Focus Fuzz</h1>
    <section>
      <ff-sound-wrapper></ff-sound-wrapper>
    </section>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private soundService: SoundService) { }

  ngOnInit() {
    
  }

}
