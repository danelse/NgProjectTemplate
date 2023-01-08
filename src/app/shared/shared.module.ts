import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CardComponent,
  ],
  exports: [
    TranslateModule,
    RouterModule,
    CardComponent,
    CommonModule,
  ],
})
export class SharedModule { }
