import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-details-card',
  templateUrl: './country-details-card.component.html',
  styleUrls: ['./country-details-card.component.scss']
})
export class CountryDetailsCardComponent implements OnInit {
  @Input() flagx: string;
  @Input() countryNamex: string;
  @Input() populationx: number;
  @Input() capitalx: string;


  constructor() { }

  ngOnInit() {
  }

}
