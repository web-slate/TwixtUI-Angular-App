import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SampleHeaderComponent } from '../examples/sample-header/sample-header.component';

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [CommonModule, SampleHeaderComponent],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.scss'
})
export class HubComponent {
  title = 'Hub Page Title';
  subTitle = 'Hub Page Sub Title';

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
