import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http: HttpClient) {

  }

  getAllCountries() {
    return this._http.get('https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag');
  }

  getAllCountriesDetails(countryName: string) {
    return this._http.get(`https://restcountries.eu/rest/v2/name/${countryName}`);

  }
}
