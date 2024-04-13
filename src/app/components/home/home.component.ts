import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from '../../carousel/carousel.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbModule,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
public contactus: any;

constructor(private router: Router){}

  public contactUs(){
  console.log("hi");
  this.router.navigate(['/contactus']);
}
}
