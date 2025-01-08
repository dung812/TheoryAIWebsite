import { Component, HostListener, NgZone } from '@angular/core';
import { EnvironmentService } from '@lib/services/environment.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navItems = [
    { name: 'app.header.home', id: 'hero', link: '#hero' },
    { name: 'app.header.our-platform', id: 'platform', link: '#platform' },
    { name: 'app.header.pricing', id: 'pricing', link: '#pricing' },
    { name: 'app.header.how-it-works', id: 'how-it-works', link: '#how-it-works' },
    { name: 'app.header.testimonials', id: 'testimonials', link: '#testimonials' },
    { name: 'app.header.faq', id: 'faq', link: '#faq' },
  ];

  redirectLoginUrl = '';
  activeSection = 'hero';
  private scrollListener: any;

  constructor(
    private ngZone: NgZone,
    private environmentService: EnvironmentService
  ) {
    const redirectUrl = this.environmentService.getRedirectUrl();
    if(redirectUrl) {
      this.redirectLoginUrl = redirectUrl;
    }
  }

  ngOnInit(): void {
    // Run the scroll listener outside Angular's zone
    this.ngZone.runOutsideAngular(() => {
      this.scrollListener = this.onScroll.bind(this);
      window.addEventListener('scroll', this.scrollListener);
    });
  }

  ngOnDestroy(): void {
    // Cleanup the scroll listener
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.toggleMobileMenu();
    }
  }

  private onScroll(): void {
    const scrollPosition = window.scrollY;
    const headerHeight = 72

    this.ngZone.run(() => {
      for (const item of this.navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop - headerHeight - 100 &&
            scrollPosition < offsetTop + offsetHeight - headerHeight
          ) {
            this.activeSection = item.id;
            break;
          }
        }
      }
    });
  }

  toggleMobileMenu(): void {
    const navmenu = document.getElementById('navmenu');
    if (navmenu) {
      navmenu.classList.toggle('mobile-nav-active');
    }
  }

  navigateToLoginPage() {
    window.location.href = `${this.redirectLoginUrl}/login`;
  }
}
