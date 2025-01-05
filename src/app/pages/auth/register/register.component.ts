import { MicrosoftLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isShowQr = true; // QR code visibility
  isModalOpen = false; // Modal visibility
  selectedOption = {
    name: '',
    price: '',
  }; // Stores selected option
  paymentOptions = [
    { name: 'app.home.pricing.plans.free.title', price: 'app.home.pricing.plans.free.price' },
    { name: 'app.home.pricing.plans.7_days.title', price: 'app.home.pricing.plans.7_days.price' },
    { name: 'app.home.pricing.plans.14_days.title', price: 'app.home.pricing.plans.14_days.price' },
    { name: 'app.home.pricing.plans.30_days.title', price: 'app.home.pricing.plans.30_days.price' },
  ];

  // Register with order
  loginWithPaymentForm!: FormGroup;
  selectOptions: any = [
    {
      value: 1,
      label: 'authentication.sign_up_with_payment.payment_options.ideal',
      image: '/assets/icons/svg/fa-brands_ideal.svg',
    },
    {
      value: 2,
      label: 'authentication.sign_up_with_payment.payment_options.card',
      image: '/assets/icons/svg/logos_mastercard.svg',
    },
    {
      value: 2,
      label: 'authentication.sign_up_with_payment.payment_options.bancontact',
      image: '/assets/icons/svg/cib_bancontact.svg',
    },
    {
      value: 2,
      label: 'authentication.sign_up_with_payment.payment_options.payment_button',
      image: '/assets/icons/svg/icon-park_flash-payment.svg',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private socialAuthService: SocialAuthService,
  ) {
    this.selectedOption = this.paymentOptions[0];
  }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      this.openModal(true);
    });
    this.initializeForm();
  }

  private initializeForm() {
    // Init form group and include some validates to register with order
    this.loginWithPaymentForm = this.fb.group({
      payment: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      label: [''],
    });
  }
  login() {
    this.router.navigate(['/dashboard']);
  }

  openModal(isShowQr: boolean) {
    this.isShowQr = isShowQr;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  selectOption(option: { name: string; price: string }) {
    this.selectedOption = option;
    this.closeModal();
  }

  googleSignin(googleWrapper: any) {
    googleWrapper.click();
  }

  loginWithMs() {
    this.socialAuthService.signIn(MicrosoftLoginProvider.PROVIDER_ID);
  }
}
