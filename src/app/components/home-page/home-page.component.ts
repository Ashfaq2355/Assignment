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

  countries: Countries [];

  @Output() selectedCity: EventEmitter<string>;



  constructor(private _countriesService: CountriesService, private _router: Router) {

    this.countries = [];
    this.getCountries(); 
    this.selectedCity=new EventEmitter<string>();
   
  }

  ngOnInit() {
    
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
  
  goToCountryDetailsPage(country){
    this._router.navigate(['/countryDetails/', country.countryName]);  
  }
}
