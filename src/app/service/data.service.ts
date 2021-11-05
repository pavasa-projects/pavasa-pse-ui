import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Property} from '../model/property';
import {Auth} from 'aws-amplify';
import {CognitoUser} from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // local url
  // private propertyAPIUrl = 'http://localhost:5000/api/v1/property';
  // prod api url
  private propertyAPIUrl = 'https://wi64cu0q36.execute-api.ap-south-1.amazonaws.com/prod/property';


  constructor(private http: HttpClient) {
  }

  getProperty(id: string): Observable<Property> {
    return this.http.get<Property>(this.propertyAPIUrl + '/' + id);
  }

  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.propertyAPIUrl);
  }

  addProperty(newProperty: Property): Observable<Property> {
    return this.http.post<Property>(this.propertyAPIUrl, newProperty, this.getHeaders());
  }

  private getHeaders(): { headers: HttpHeaders } {
    let jwtIdToken = '';
    Auth.currentAuthenticatedUser()
      .then((user: CognitoUser) => {
        jwtIdToken = user.getSignInUserSession().getIdToken().getJwtToken();
      });

    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'auth-token': jwtIdToken
      })
    };
  }

  /*updateProperty(updatedProperty: Property): Observable<void> {
    return this.http.put<void>(`/api/Propertys/${updatedProperty.PropertyID}`, updatedProperty, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteProperty(PropertyID: number): Observable<void> {
    return this.http.delete<void>(`/api/Propertys/${PropertyID}`);
  }*/

}
