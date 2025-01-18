import { Component } from '@angular/core';

@Component({
  selector: 'app-carouselcomponent',
  templateUrl: './carouselcomponent.component.html',
  styleUrl: './carouselcomponent.component.css'
})
export class CarouselcomponentComponent {
  images = [
    { name: 'mr-cool.jpg', caption: 'Mr Cool' },
    { name: 'sleeping-beauty.jpg', caption: 'Sleeping Beauty' },
    { name: 'awesome.jpg', caption: 'Awesome' },
  ];
}
