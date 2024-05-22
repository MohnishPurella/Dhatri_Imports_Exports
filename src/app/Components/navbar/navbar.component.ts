import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isTransparent: boolean = true;  // Declare the isTransparent variable

  constructor(
    private router: Router, 
    private renderer: Renderer2, 
    private el: ElementRef) {}

  ngOnInit(): void {
    // Subscribe to router events to handle URL changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateNavbarStyle(event.url);
      }
    });

    // Set initial style based on current URL
    this.updateNavbarStyle(this.router.url);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = 80; // Pixels scrolled before changing style
    const windowScroll = window.pageYOffset;
    if (windowScroll > threshold) {
      this.isTransparent = false;
      this.applyStyles();
    } else {
      this.updateNavbarStyle(this.router.url);
    }
  }

  private updateNavbarStyle(url: string) {
    // Check if the current URL is the home page
    this.isTransparent = url === '/home' || url === '/';
    this.applyStyles();
  }

  private applyStyles() {
    // Apply styles using Renderer2 based on isTransparent
    if (this.isTransparent) {
      this.renderer.addClass(this.el.nativeElement, 'bg-transparent');
      this.renderer.removeClass(this.el.nativeElement, 'bg-dark');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'bg-transparent');
      this.renderer.addClass(this.el.nativeElement, 'bg-dark');
    }
  }
}
