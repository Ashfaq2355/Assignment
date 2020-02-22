import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _translateService: TranslateService) { }

  setLanguage(language:string){
    if (language === 'EN'){
      this._translateService.use('en')
    }
    else if (language === 'FR'){
      this._translateService.use('fr')
    }
  }

  ngOnInit() {
  }

}
