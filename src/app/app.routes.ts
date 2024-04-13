import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SuccessStoriesComponent } from './components/success-stories/success-stories.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'success-stories', component: SuccessStoriesComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
