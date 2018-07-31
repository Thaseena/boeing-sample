import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  constructor(private _authservice: AuthService){
    console.log('Component page - ', this._authservice.getAuthData());
  }
  userIsLogged() {
    const user = this._authservice.getAuthData();
    if(user === null) {
      return false;
    }
    return true;
  }
}
