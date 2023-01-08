import { HttpClient, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app/app.component';
import routes from './app/routes';
import { appReducer } from './app/state/app.reducer';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        }
      }),
      StoreModule.forRoot({
        appState: appReducer,
      }),
      RouterModule.forRoot(routes),
    ),
  ],
});
