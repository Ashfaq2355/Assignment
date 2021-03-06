import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private _translateService: TranslateService) {
    this._translateService.setDefaultLang('en');
    this._translateService.use(this._translateService.getBrowserLang());
  }
}

