import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-page-not-found-page',
  imports: [
    SharedModule,
  ],
  templateUrl: './page-not-found-page.component.html',
  styleUrls: ['./page-not-found-page.component.scss']
})
export class PageNotFoundPageComponent {

}
