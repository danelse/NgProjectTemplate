import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateModel } from 'src/app/models/app-state.model';
import { AppActions } from 'src/app/state/app.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public state$: Observable<AppStateModel>;
  public envProduction = environment.production;

  constructor(private store: Store<{ appState: AppStateModel }>) {
    this.state$ = store.pipe(select('appState'));
  }

  public changeState() {
    const randomNumber = Math.floor(Math.random() * (1000));
    this.store.dispatch(AppActions.changenumber({ number: randomNumber }))
  }
}
