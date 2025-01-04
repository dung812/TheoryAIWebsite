import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './lib/components/footer/footer.component';
import { HeaderComponent } from './lib/components/header/header.component';
import { LayoutHorizontalComponent } from './lib/components/layouts/layout-horizontal/layout-horizontal.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { PageNotFoundComponent } from './pages/screens/page-not-found/page-not-found.component';
import { ThemingComponent } from './lib/components/theming/theming.component';
import { HeroComponent } from './pages/home/sections/hero/hero.component';
import { PlatformComponent } from './pages/home/sections/platform/platform.component';
import { PricingComponent } from './pages/home/sections/pricing/pricing.component';
import { HowItWorksComponent } from './pages/home/sections/how-it-works/how-it-works.component';
import { TestimonialsComponent } from './pages/home/sections/testimonials/testimonials.component';
import { FaqComponent } from './pages/home/sections/faq/faq.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './lib/components/select/select.component';
import { PopupComponent } from './lib/components/popup/popup.component';
import { EnvironmentService } from '@lib/services/environment.service';
import { GoogleLoginProvider, MicrosoftLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleSigninComponent } from './lib/components/google-signin/google-signin.component';

export function SocialAuthConfigFactory(envService: EnvironmentService): SocialAuthServiceConfig {
  return {
    autoLogin: false,
    providers: [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(envService.get('GOOGLE_CLIENT_ID'), { oneTapEnabled: false }),
      },
      {
        id: MicrosoftLoginProvider.PROVIDER_ID,
        provider: new MicrosoftLoginProvider(envService.get('MICROSOFT_CLIENT_ID'), {
          redirect_uri: envService.get('APP_URL') + '/signup',
        }),
      },
    ],
  };
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LayoutHorizontalComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ThemingComponent,
    HeroComponent,
    PlatformComponent,
    PricingComponent,
    HowItWorksComponent,
    TestimonialsComponent,
    FaqComponent,
    SelectComponent,
    PopupComponent,
    GoogleSigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useFactory: SocialAuthConfigFactory,
      deps: [EnvironmentService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
