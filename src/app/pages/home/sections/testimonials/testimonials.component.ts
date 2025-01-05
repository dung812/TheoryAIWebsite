import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      id: 1,
      name: 'app.home.testimonials.testimonial_1.name',
      image: 'assets/imgs/png/sophie-van-dijk.png',
      review: 'app.home.testimonials.testimonial_1.review',
      featureHighlight: [
        'app.home.testimonials.testimonial_1.feature1',
        'app.home.testimonials.testimonial_1.feature1'
      ]
    },
    {
      id: 2,
      name: 'app.home.testimonials.testimonial_2.name',
      image: 'assets/imgs/png/mark-jansen.png',
      review: 'app.home.testimonials.testimonial_2.review',
      featureHighlight: [
        'app.home.testimonials.testimonial_2.feature1',
        'app.home.testimonials.testimonial_2.feature2'
      ]
    },
    {
      id: 3,
      name: 'app.home.testimonials.testimonial_3.name',
      image: 'assets/imgs/png/lisa-de-boer.png',
      review: 'app.home.testimonials.testimonial_3.review',
      featureHighlight: [
        'app.home.testimonials.testimonial_3.feature1',
        'app.home.testimonials.testimonial_3.feature1'
      ]
    }
  ]
}
