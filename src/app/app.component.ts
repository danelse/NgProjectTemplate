import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    SharedModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
