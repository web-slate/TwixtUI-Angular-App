import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSingleLineComponent } from '../input-single-line/input-single-line.component';

@Component({
  selector: 'app-user-name-input',
  standalone: true,
  imports: [CommonModule, InputSingleLineComponent],
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.scss']
})
export class UserNameInputComponent {
  value = '';
  error = '';
  warning = '';

  handleValueChange(newValue: string) {
    this.value = newValue;
    this.error = this.value === '' ? 'Field cannot be empty' : '';
    this.warning = this.value.length > 0 && this.value.length < 5 ? 'Text is too short' : '';
  }

  handleBlur() {
    console.log('Input field lost focus');
  }
}
