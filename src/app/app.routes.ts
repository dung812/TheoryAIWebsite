import { Routes } from "@angular/router";
import { LayoutHorizontalComponent } from "@lib/components/layouts/layout-horizontal/layout-horizontal.component";
import { AuthGuard } from "@lib/guards/auth-guard.guard";
import { LoginComponent } from "@pages/auth/login/login.component";
import { RegisterComponent } from "@pages/auth/register/register.component";
import { HomeComponent } from "@pages/home/home.component";
import { PageNotFoundComponent } from "@pages/screens/page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutHorizontalComponent,
    children: [
      { path: '', component: HomeComponent },
      // Add other routes that need header and footer here
    ],
  },
  { path: 'signup', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent },
  // Add other routes without header and footer here
];
