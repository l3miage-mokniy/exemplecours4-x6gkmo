import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { PipoService } from './pipo.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  a = 0;
  b = 0;
  obs: Observable<number>;

  constructor(pipo: PipoService) {
    this.obs = pipo.obsCompteur;
  }
}
