import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // Register with order
  loginWithPaymentForm!: FormGroup;
  selectOptions: any = [
    {
      value: 1,
      label: 'iDEAL',
      image: '/assets/icons/svg/fa-brands_ideal.svg',
    },
    {
      value: 2,
      label: 'Card',
      image: '/assets/icons/svg/logos_mastercard.svg',
    },
    {
      value: 2,
      label: 'Bancontact',
      image: '/assets/icons/svg/cib_bancontact.svg',
    },
    {
      value: 2,
      label: 'Payment button',
      image: '/assets/icons/svg/icon-park_flash-payment.svg',
    },
  ];
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
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
}
