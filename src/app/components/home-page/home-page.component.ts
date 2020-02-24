import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Countries } from 'src/app/dto/countries';
import { CountriesService } from 'src/app/services/countries.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  countries: Countries[];

  constructor(private _countriesService: CountriesService, private _router: Router) {

    this.countries = [];
    this.getCountries();
  }

  ngOnInit() {

  }
  //Gets the name, population size and flag of all the countries of the api and saves them in the variables defined in countries.ts
  getCountries() {
    this._countriesService.getAllCountries().subscribe(
      (data: any) => {
        data.forEach(element => {
          this.countries.push({
            flag: element.flag,
            countryName: element.name,
            population: element.population
          });
        });
      }
    );
  }
  //Navigates to page where details about specific country will be displayed
  goToCountryDetailsPage(country) {
    this._router.navigate(['/countryDetails/', country.countryName]);
  }
}
