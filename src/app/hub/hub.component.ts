import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SampleHeaderComponent } from '../examples/sample-header/sample-header.component';
import { UserNameInputComponent } from '../examples/username-input/username-input.component';
import { TwixtAlertComponent } from 'TwixtUI/twixt-alert/twixt-alert.component';
import { TwixtButtonComponent } from 'TwixtUI/twixt-button/twixt-button.component';
import { TwixtCheckboxComponent } from 'TwixtUI/twixt-checkbox/twixt-checkbox.component';
import { TwixtDialogComponent } from 'TwixtUI/twixt-dialog/twixt-dialog.component';
import { TwixtHeaderComponent } from 'TwixtUI/twixt-header/twixt-header.component';
import { TwixtCommentSystemComponent } from 'TwixtUI/twixt-comment-system/twixt-comment-system.component';
import { TwixtModalComponent } from 'TwixtUI/twixt-modal/twixt-modal.component';
import { TwixtLeftSidebar } from 'TwixtUI/twixt-left-sidebar/twixt-left-sidebar.component';

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [
    CommonModule,
    SampleHeaderComponent,
    UserNameInputComponent,
    TwixtAlertComponent,
    TwixtButtonComponent,
    TwixtCheckboxComponent,
    TwixtDialogComponent,
    TwixtHeaderComponent,
    TwixtCommentSystemComponent,
    TwixtModalComponent,
    TwixtLeftSidebar
  ],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.scss'
})
export class HubComponent {
  title = 'Hub Page Title';
  subTitle = 'Hub Page Sub Title';
  showDialog = false; // Control the display of the dialog
  showModal = false; // Control the display of the modal
  isSidebarOpen = false;

  announcementObject = {
    title: 'Warning!',
    desc: 'This is a warning alert.'
  };

  constructor(private router: Router) { }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  handleHamburgerClick(){
    this.isSidebarOpen = true;
  }

  handleSidebarBlurEvent(){
    this.isSidebarOpen = false;
  }

  // Define a noop function
  noopClickHandler(event: Event): void {
    // This function does nothing
  }

  // Define a noop function
  noopCheckHandler(isChecked: boolean): void {
    // This function does nothing
  }

  setToShowDialog(value: boolean): void {
    this.showDialog = value;
  }

  setToShowModal(value: boolean): void {
    this.showModal = value;
  }
}
