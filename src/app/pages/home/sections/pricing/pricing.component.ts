import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
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
}
