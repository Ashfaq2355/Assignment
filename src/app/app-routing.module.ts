import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailsPageComponent } from './components/country-details-page/country-details-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'countryDetails/:countryName', component: CountryDetailsPageComponent },
  { path: '**', redirectTo: '/home-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
