import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infinite-logo-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infinite-logo-slider.component.html',
  styleUrl: './infinite-logo-slider.component.css'
})
export class InfiniteLogoSliderComponent {
  imageSources = [
    { src: 'assets/logo/logo1.png', alt: 'Slide 1' },
    { src: 'assets/logo/logo2.png', alt: 'Slide 2' },
    { src: 'assets/logo/logo3.png', alt: 'Slide 3' },
    { src: 'assets/logo/logo4.png', alt: 'Slide 4' },
    { src: 'assets/logo/logo5.png', alt: 'Slide 5' },
    { src: 'assets/logo/logo6.png', alt: 'Slide 6' },
    { src: 'assets/logo/logo7.png', alt: 'Slide 7' },
    { src: 'assets/logo/logo8.png', alt: 'Slide 8' },
    { src: 'assets/logo/logo9.png', alt: 'Slide 9' },
    { src: 'assets/logo/logo10.png', alt: 'Slide 10' },
    { src: 'assets/logo/logo11.png', alt: 'Slide 11' },
    { src: 'assets/logo/logo12.png', alt: 'Slide 12' }
  ];
}
