import { Component } from '@angular/core';
import { EnvironmentService } from '@lib/services/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Theory AI';
  constructor(private environmentService: EnvironmentService) {
    const envName = this.environmentService.get('ENV_NAME');
    const appUrl = this.environmentService.get('APP_URL');
    const redirectUrl = this.environmentService.getRedirectUrl();
    console.log({
      envName,
      appUrl,
      redirectUrl
    });
  }
}
