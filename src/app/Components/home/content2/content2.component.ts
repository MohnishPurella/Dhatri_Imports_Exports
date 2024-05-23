import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-content2',
  standalone: true,
  imports: [],
  templateUrl: './content2.component.html',
  styleUrl: './content2.component.css'
})
export class Content2Component {
  @HostBinding('style.backgroundColor') backgroundColor = '#14ff72cb !important';
}
