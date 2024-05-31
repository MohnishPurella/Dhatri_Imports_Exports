import { CommonModule } from '@angular/common';
import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-content2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content2.component.html',
  styleUrl: './content2.component.css'
})
export class Content2Component {
  showAnimation = false;
  @HostBinding('style.backgroundColor') backgroundColor = '#14ff72cb !important';
}
