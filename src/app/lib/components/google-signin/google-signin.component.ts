import { Component, EventEmitter, Output } from '@angular/core';

declare global {
  interface Window {
    google: any;
  }
}

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.scss'],
})
export class GoogleSigninComponent {
  @Output() loginWithGoogle: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Creates a hidden Google login button wrapper and appends it to the document body.
   * The wrapper is styled to be hidden and has a custom class 'custom-google-button'.
   * It uses the Google Identity Services library to render a button inside the wrapper.
   *
   * @returns An object with a `click` method that triggers a click event on the hidden Google login button.
   */
  createFakeGoogleWrapper = () => {
    const googleLoginWrapper = document.createElement('div');
    googleLoginWrapper.style.display = 'none';
    googleLoginWrapper.classList.add('custom-google-button');
    document.body.appendChild(googleLoginWrapper);
    window.google.accounts.id.renderButton(googleLoginWrapper, {
      type: 'icon',
      width: '200',
    });

    const googleLoginWrapperButton = googleLoginWrapper.querySelector(
      'div[role=button]'
    ) as HTMLElement;

    return {
      click: () => {
        googleLoginWrapperButton?.click();
      },
    };
  };

  handleGoogleLogin() {
    this.loginWithGoogle.emit(this.createFakeGoogleWrapper());
  }
}
