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
      flag: '',
      countryName: '',
      capital: '',
      region: '',
      population: 0,
      latitude: '',
      longitude: '',
      currenciesCode: '',
      currenciesName: '',
      currenciesSymbol: '',
      borders: '',
      callingCodes: [],
      timezone: []
    }

  }

  ngOnInit(): void {

  }
  //Gets the details of the different countries from the api and save them in the variables declared in countryDetails.ts
  getAllCountriesDetails(): void {
    //Gets the name of the country in the url and saves it in countryName
    const countryName = this._activatedRoute.snapshot.paramMap.get('countryName');
    //console.log(countryName);
    //Gets the details of the country based on the country name from the url
    this._countryService.getAllCountriesDetails(countryName).subscribe(
      (data: any) => {
        data.forEach(element => {
          this.countryDetails = ({
            flag: element.flag,
            countryName: element.name,
            capital: element.capital,
            region: element.region,
            population: element.population,
            latitude: element.latlng[0],
            longitude: element.latlng[1],
            currenciesCode: element.currencies[0].code,
            currenciesName: element.currencies[0].name,
            currenciesSymbol: element.currencies[0].symbol,
            borders: element.borders,
            callingCodes: element.callingCodes,
            timezone: element.timezones
          });
        });
      });
  }
  //Return back to home-page
  goBack() {
    this._router.navigateByUrl("/home-page");
  }
  //Calculate time of different countries
  calculateTime(timezone: string[]) {
    let time: string;

    if (timezone.length > 0) {
      let date = new Date();

      let currentTime: number;
      currentTime = date.getTime() + (date.getTimezoneOffset() * 60000);

      let offset: string[];
      offset = timezone[Math.floor(timezone.length / 2)].slice(3).split(':');
      //console.log(offset);
      if (offset.length == 2) {

        let offsetNumber: number;
        offsetNumber = +offset[0] + (+offset[1] / 60);

        let calTime = new Date(currentTime + (offsetNumber * 3600000));
        //console.log(calTime);
        if (calTime.getHours() <= 9) {
          time = '0' + calTime.getHours();
        } else {
          time = calTime.getHours().toString();
        }
        if (calTime.getMinutes() <= 9) {
          time += ':0' + calTime.getMinutes();
        } else {
          time += ':' + calTime.getMinutes();
        }
      }
    }
    else{
      time='No Data Available'
    }
    return time;
  }
}
