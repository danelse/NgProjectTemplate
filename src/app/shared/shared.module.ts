import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [
    CardComponent,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    CardComponent,
  ],
})
export class SharedModule { }
