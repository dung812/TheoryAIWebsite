import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  plans = [
    {
      title: 'Free Access',
      price: 'Free',
      features: [
        'AI Tutor Chatbot (24/7 assistance)',
        'Engaging Video Lessons',
        'Adaptive Learning Playlists',
        'Practice Exams (CBR Mock Exams)',
        'Interactive Quizzes',
        'Reading Lessons',
        'In-Depth Exam Explanations',
        'Flashcards Trainer for Memorization'
      ],
      buttonText: 'Try now',
      isPopular: false
    },
    {
      title: '7 Days Access',
      price: '€12.99',
      features: [
        'AI Tutor Chatbot (24/7 assistance)',
        'Engaging Video Lessons',
        'Adaptive Learning Playlists',
        'Practice Exams (CBR Mock Exams)',
        'Interactive Quizzes',
        'Reading Lessons',
        'In-Depth Exam Explanations',
        'Flashcards Trainer for Memorization'
      ],
      buttonText: 'Buy now',
      isPopular: false
    },
    {
      title: '14 Days Access',
      price: '€24.99',
      features: [
        'AI Tutor Chatbot (24/7 assistance)',
        'Engaging Video Lessons',
        'Adaptive Learning Playlists',
        'Practice Exams (CBR Mock Exams)',
        'Interactive Quizzes',
        'Reading Lessons',
        'In-Depth Exam Explanations',
        'Flashcards Trainer for Memorization'
      ],
      buttonText: 'Buy now',
      isPopular: false
    },
    {
      title: '30 Days Access',
      price: '€49.99',
      features: [
        'AI Tutor Chatbot (24/7 assistance)',
        'Engaging Video Lessons',
        'Adaptive Learning Playlists',
        'Practice Exams (CBR Mock Exams)',
        'Interactive Quizzes',
        'Reading Lessons',
        'In-Depth Exam Explanations',
        'Flashcards Trainer for Memorization'
      ],
      buttonText: 'Buy now',
      isPopular: true
    }
  ];

  faqs = [
    {
      question: 'How does the AI Tutor assist me?',
      answer:
        'The AI Tutor provides personalized learning experiences, adapting to your progress to maximize your understanding of key concepts.',
    },
    {
      question: 'Can I access the platform on mobile devices?',
      answer:
        'Yes, our platform is fully responsive and can be accessed on both desktop and mobile devices.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods including Visa, MasterCard, and PayPal to ensure a secure and convenient checkout process.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, we offer a free trial to help you evaluate the platform before committing to a subscription.',
    },
    {
      question: 'How does the adaptive learning feature work?',
      answer:
        'Our adaptive learning feature identifies your weak areas and tailors lessons to improve your performance efficiently.',
    },
    {
      question: 'How does the AI Tutor assist me?',
      answer:
        'The AI Tutor provides personalized learning experiences, adapting to your progress to maximize your understanding of key concepts.',
    }
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
