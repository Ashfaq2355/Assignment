import { Component } from '@angular/core';
import { Countries } from './dto/countries';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  constructor (){
   
   }

method($event){
  console.log('In parent component')
}
 
}

