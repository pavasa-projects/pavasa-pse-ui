import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import {Auth} from 'aws-amplify';
import {CognitoUser} from 'amazon-cognito-identity-js';
import {AppComponent} from '../../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {

  isLoggedIn = false;

  constructor(private router: Router) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    const val = await Auth.currentAuthenticatedUser()
      .then(() => {
          return true;
        }, (err) => {
          this.router.navigateByUrl('/post-property');
          return false;
        }
      );
    return val;
  }
}
