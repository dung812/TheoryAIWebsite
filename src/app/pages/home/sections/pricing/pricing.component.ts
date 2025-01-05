import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  plans = [
    {
      title: 'app.home.pricing.plans.free.title',
      price: 'app.home.pricing.plans.free.price',
      features: [
        'app.home.pricing.plans.free.feature1',
        'app.home.pricing.plans.free.feature2',
        'app.home.pricing.plans.free.feature3',
        'app.home.pricing.plans.free.feature4',
        'app.home.pricing.plans.free.feature5',
        'app.home.pricing.plans.free.feature6',
        'app.home.pricing.plans.free.feature7',
        'app.home.pricing.plans.free.feature8',
      ],
      buttonText: 'app.home.pricing.plans.free.cta',
      isPopular: false
    },
    {
      title: 'app.home.pricing.plans.7_days.title',
      price: 'app.home.pricing.plans.7_days.price',
      features: [
        'app.home.pricing.plans.7_days.feature1',
        'app.home.pricing.plans.7_days.feature2',
        'app.home.pricing.plans.7_days.feature3',
        'app.home.pricing.plans.7_days.feature4',
        'app.home.pricing.plans.7_days.feature5',
        'app.home.pricing.plans.7_days.feature6',
        'app.home.pricing.plans.7_days.feature7',
        'app.home.pricing.plans.7_days.feature8',
      ],
      buttonText: 'app.home.pricing.plans.7_days.cta',
      isPopular: false
    },
    {
      title: 'app.home.pricing.plans.14_days.title',
      price: 'app.home.pricing.plans.14_days.price',
      features: [
        'app.home.pricing.plans.14_days.feature1',
        'app.home.pricing.plans.14_days.feature2',
        'app.home.pricing.plans.14_days.feature3',
        'app.home.pricing.plans.14_days.feature4',
        'app.home.pricing.plans.14_days.feature5',
        'app.home.pricing.plans.14_days.feature6',
        'app.home.pricing.plans.14_days.feature7',
        'app.home.pricing.plans.14_days.feature8',
      ],
      buttonText: 'app.home.pricing.plans.14_days.cta',
      isPopular: false
    },
    {
      title: 'app.home.pricing.plans.30_days.title',
      price: 'app.home.pricing.plans.30_days.price',
      features: [
        'app.home.pricing.plans.30_days.feature1',
        'app.home.pricing.plans.30_days.feature2',
        'app.home.pricing.plans.30_days.feature3',
        'app.home.pricing.plans.30_days.feature4',
        'app.home.pricing.plans.30_days.feature5',
        'app.home.pricing.plans.30_days.feature6',
        'app.home.pricing.plans.30_days.feature7',
        'app.home.pricing.plans.30_days.feature8',
      ],
      buttonText: 'app.home.pricing.plans.30_days.cta',
      isPopular: true
    }
  ];
}
