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
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
