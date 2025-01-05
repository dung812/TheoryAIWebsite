import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  navItems = [
    { name: 'app.header.home', id: 'hero', link: '#hero' },
    { name: 'app.header.our-platform', id: 'platform', link: '#platform' },
    { name: 'app.header.pricing', id: 'pricing', link: '#pricing' },
    { name: 'app.header.how-it-works', id: 'how-it-works', link: '#how-it-works' },
    { name: 'app.header.testimonials', id: 'testimonials', link: '#testimonials' },
    { name: 'app.header.faq', id: 'faq', link: '#faq' },
  ];

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
