import { Routes } from "@angular/router";
import { LayoutHorizontalComponent } from "@lib/components/layouts/layout-horizontal/layout-horizontal.component";
import { AuthGuard } from "@lib/guards/auth-guard.guard";
import { LoginComponent } from "@pages/auth/login/login.component";
import { RegisterComponent } from "@pages/auth/register/register.component";
import { HomeComponent } from "@pages/home/home.component";
import { PageNotFoundComponent } from "@pages/screens/page-not-found/page-not-found.component";


// export const routes: Routes = [
//   {
//       path: 'auth',
//       loadChildren: async () => (await import('@pages/auth')).routes,
//       canMatch: [authGuard({ requiresAuthentication: false })],
//   },
//   {
//       path: '',
//       loadChildren: async () => (await import('@pages/home')).routes,
//       canMatch: [authGuard()],
//   },
//   {
//       path: 'users/:username',
//       loadChildren: async () => (await import('@pages/user')).routes,
//       canMatch: [authGuard()],
//   },
//   {
//       path: 'settings',
//       loadChildren: async () => (await import('@pages/settings')).routes,
//       canMatch: [authGuard()],
//   },
//   {
//       path: '**',
//       loadComponent: async () => (await import('@pages/screens/not-found/not-found.component')).NotFoundComponent,
//   },
// ];

export const routes: Routes = [
  {
    path: '',
    component: LayoutHorizontalComponent,
    children: [
      { path: '', component: HomeComponent },
      // Add other routes that need header and footer here
    ],
  },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
  // Add other routes without header and footer here
];
