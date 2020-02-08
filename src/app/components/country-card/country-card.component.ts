import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {
  @Input() flagx: string;
  @Input() countryNamex: string;
  @Input() populationx: number;
  @Input() capitalx: string;

  @Output() selectedCountry: EventEmitter<string>;


  constructor() { 
    this.selectedCountry=new EventEmitter<string>();
  }

  ngOnInit() {
  }

  countrySelected(countryNamex: string): void{
    console.log(countryNamex);
    this.selectedCountry.emit(countryNamex);
  }


}
