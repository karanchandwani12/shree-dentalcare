import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from '../../carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbModule,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
