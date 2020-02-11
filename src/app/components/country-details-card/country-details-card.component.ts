import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-details-card',
  templateUrl: './country-details-card.component.html',
  styleUrls: ['./country-details-card.component.scss']
})
export class CountryDetailsCardComponent implements OnInit {
  @Input() flagx: string;
  @Input() countryNamex: string;
  @Input() capitalx: string;
  @Input() regionx: string;
  @Input() populationx: number;
  @Input() latitudex: string;
  @Input() longitudex: string;
  @Input() currenciesCodex: string;
  @Input() currenciesNamex: string;
  @Input() currenciesSymbolx: string;
  @Input() bordersx: string;
  @Input() callingCodesx: [];

  constructor() { }

  ngOnInit() {
  }

}
