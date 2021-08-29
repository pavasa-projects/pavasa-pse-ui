import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Property} from '../../model/property';
import {Observable} from 'rxjs';
import {DataService} from '../../service/data.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsResolve implements Resolve<Property> {

  constructor(private dataService: DataService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Property> | Promise<Property> | Property {
    return this.dataService.getProperty(route.params.id);
  }

}
