import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
  images = [
    'assets/Images/Home Page Slider/front-view-chestnuts-cup-with-hazelnuts-walnuts.jpg', 
    'assets/Images/Home Page Slider/IMG_6238.jpg', 
    'assets/Images/Home Page Slider/istockphoto-867747178-2048x2048.jpg', 
    'assets/Images/Home Page Slider/macadamia-soap-skin-care-treatment.jpg'
  ];
  currentIndex = 0;
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.startAutoSliding();
  }

  slideNext() {
    const nextIndex = (this.currentIndex + 1) % this.images.length;
    this.setCurrentIndex(nextIndex);
  }

  slidePrev() {
    const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.setCurrentIndex(prevIndex);
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  switchImage(index: number) {
    this.setCurrentIndex(index);
  }

  startAutoSliding() {
    this.intervalId = setInterval(() => {
      this.slideNext();
    }, 3000);
  }

  stopAutoSliding() {
    clearInterval(this.intervalId);
  }
}
