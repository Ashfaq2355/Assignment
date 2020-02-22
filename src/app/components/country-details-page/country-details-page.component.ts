import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';
import { CountryDetails } from 'src/app/dto/countryDetails';

@Component({
  selector: 'app-country-details-page',
  templateUrl: './country-details-page.component.html',
  styleUrls: ['./country-details-page.component.scss']
})
export class CountryDetailsPageComponent implements OnInit {

  countryDetails: CountryDetails;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _countryService: CountriesService) {

    this.getAllCountriesDetails();
    this.countryDetails = {
      flag:'',
      countryName: '',
      capital:'',
      region:'',
      population:0,
      latitude:'',
      longitude:'',
      currenciesCode:'',
      currenciesName:'',
      currenciesSymbol:'',
      borders:'',
      callingCodes:[]
    }

  }

  ngOnInit(): void {

   }

  getAllCountriesDetails(): void{
    const countryName=this._activatedRoute.snapshot.paramMap.get('countryName');
    console.log(countryName);
    this._countryService.getAllCountriesDetails(countryName).subscribe(
      (data: any)=>{
      data.forEach(element =>{
        this.countryDetails=({
          flag: element.flag,
          countryName: element.name,
          capital: element.capital,
          region: element.region,
          population: element.population,
          latitude:element.latlng[0],
          longitude: element.latlng[1],
          currenciesCode: element.currencies[0].code,
          currenciesName: element.currencies[0].name,
          currenciesSymbol: element.currencies[0].symbol,
          borders: element.borders,
          callingCodes: element.callingCodes
          });
      });
    });
  }

  goBack(){
    this._router.navigateByUrl("/home-page");
  }

}
