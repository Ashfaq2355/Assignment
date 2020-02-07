import { Component, OnInit, Input } from '@angular/core';
import { Countries } from 'src/app/dto/countries';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @Input() countries: Countries;


  constructor() { }

  ngOnInit() {
  }

}
