import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageNotFoundPageRoutingModule } from './page-not-found-page-routing.module';
import { PageNotFoundPageComponent } from './page-not-found-page.component';

@NgModule({
  declarations: [
    PageNotFoundPageComponent,
  ],
  imports: [
    SharedModule,
    PageNotFoundPageRoutingModule,
  ],
  exports: [
    PageNotFoundPageComponent,
  ],
})
export class PageNotFoundPageModule { }
