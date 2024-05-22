import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isTransparent:boolean = true;
  constructor() {}

  ngOnInit(): void {}
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const verticalOffset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isTransparent = verticalOffset <= 50;
  }
}
