import { Component } from '@angular/core';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent, Content1Component, Content2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
