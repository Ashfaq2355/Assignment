import { Component } from '@angular/core';
import { Countries } from './dto/countries';
import { CountriesService } from './services/countries.service';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countries: Countries [];

  constructor (private _countriesService: CountriesService){
    this.countries = [];
    this.getCountries();
  }

  getCountries(){
    this._countriesService.getCountriesByName().subscribe(
      (data: any)=>{
        data.forEach(element =>{
          this.countries.push({
            flag: element.flag,
            countryName: element.name,
            population: element.population,
            capital: element.capital
          });
        });
      }
    );
  }
}

