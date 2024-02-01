import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sample-header.component.html',
  styleUrl: './sample-header.component.scss'
})
export class SampleHeaderComponent {
  @Input() headerClass: string = 'bg-blue-300';
  @Input() rightBlock: any; // adjust the type as necessary
  @Output() hamburgerClick = new EventEmitter<void>();

  onHamburgerClick() {
    this.hamburgerClick.emit();
  }
}
