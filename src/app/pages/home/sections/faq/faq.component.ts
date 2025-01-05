import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    {
      question: 'app.home.faq.faq_1.question',
      answer: 'app.home.faq.faq_1.answer',
    },
    {
      question: 'app.home.faq.faq_2.question',
      answer: 'app.home.faq.faq_2.answer',
    },
    {
      question: 'app.home.faq.faq_3.question',
      answer: 'app.home.faq.faq_3.answer',
    },
    {
      question: 'app.home.faq.faq_4.question',
      answer: 'app.home.faq.faq_4.answer',
    },
    {
      question: 'app.home.faq.faq_5.question',
      answer: 'app.home.faq.faq_5.answer',
    },
    {
      question: 'app.home.faq.faq_6.question',
      answer: 'app.home.faq.faq_6.answer',
    },
  ];

  // Array to manage the state of each accordion item
  accordionStates: boolean[];

  constructor() {
    // Initialize with all accordions closed
    this.accordionStates = new Array(this.faqs.length).fill(false);
  }

  // Toggles the state of a specific accordion item
  toggleAccordion(index: number): void {
    this.accordionStates[index] = !this.accordionStates[index];
  }

  // Returns the state of a specific accordion item
  isAccordionOpen(index: number): boolean {
    return this.accordionStates[index];
  }
}
