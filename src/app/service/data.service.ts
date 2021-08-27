import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Property} from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getProperties(): Observable<Property[]> {
    console.log('Getting all properties from the server.');
    return this.http.get<Property[]>('/api/properties');
  }

  addProperty(newProperty: Property): Observable<Property> {
    return this.http.post<Property>('/api/properties', newProperty, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
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
