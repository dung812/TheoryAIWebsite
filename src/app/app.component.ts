import { Component } from '@angular/core';
import { EnvironmentService } from '@lib/services/environment.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translateService: TranslateService) {
    const langs = ['en'];
    this.translateService.addLangs(langs);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }
}
