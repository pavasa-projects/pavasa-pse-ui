import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Property} from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private propertyAPIUrl = 'http://localhost:5000/api/v1/property';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) {
  }

  getProperty(id: string): Observable<Property> {
    return this.http.get<Property>(this.propertyAPIUrl + '/' + id);
  }

  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.propertyAPIUrl);
  }

  addProperty(newProperty: Property): Observable<Property> {
    return this.http.post<Property>(this.propertyAPIUrl, newProperty, this.httpOptions);
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
