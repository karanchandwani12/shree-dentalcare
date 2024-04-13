import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {  
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;  
  }  
  ngOnInit() {  
  }  
}
