import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
  images = [
    { src: 'assets/Images/Home Page Slider/img1.jpg', alt: 'Image 1' },
    { src: 'assets/Images/Home Page Slider/img2.jpg', alt: 'Image 2' },
    { src: 'assets/Images/Home Page Slider/img3.jpg', alt: 'Image 3' },
    { src: 'assets/Images/Home Page Slider/img4.jpg', alt: 'Image 4' }
  ];
  currentSlideIndex = 0;

  slider: HTMLElement | null = null;
  sliderList: HTMLElement | null = null;

  thumbnail: HTMLElement | null = null;
  thumbnailItems: NodeListOf<HTMLElement> | null = null;
  
  constructor() {}

  ngOnInit(): void {
    
  }

  ngAfterViewChecked(){
    this.slider = document.querySelector<HTMLElement>('.slider');
    this.sliderList = (this.slider)?this.slider.querySelector<HTMLElement>('.list') : null;
    this.thumbnail = document.querySelector<HTMLElement>('.thumbnail');
    this.thumbnailItems = (this.thumbnail)?this.thumbnail.querySelectorAll<HTMLElement>('.item') : null;
    
  }

  moveSlider(direction:string){
    let sliderItems = (this.sliderList)?this.sliderList.querySelectorAll('.item') : null;
    let thumbnailItems = document.querySelectorAll('.thumbnail .item');

    if(sliderItems && sliderItems[0] && this.sliderList && this.thumbnail && this.slider){
      if(direction === 'next'){
        this.sliderList.appendChild(sliderItems[0])
        this.thumbnail.appendChild(thumbnailItems[0])
        this.slider.classList.add('next')
      } else {
          this.sliderList.prepend(sliderItems[sliderItems.length - 1])
          this.thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
          this.slider.classList.add('prev')
      }
    }

    this.setupEventListeners(direction);
  }

  setupEventListeners(direction:string) {
    if(this.slider){
      this.slider.addEventListener('animationend', (event) => {
        if (direction === 'next' && this.slider) {
          this.slider.classList.remove('next');
        } else if(this.slider){
            this.slider.classList.remove('prev');
        }
      }, { once: true });
    }   
  }

}
