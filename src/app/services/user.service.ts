import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { City } from '../models/city.model';


@Injectable()
export class UserSerice{


private cities: City[];
private observableCities: BehaviorSubject<City[]>;  

constructor() {
  this.cities = new Array<City>();  
  this.observableCities = <BehaviorSubject<City[]>>new BehaviorSubject([]);
}

getCities() {
  return this.observableCities.asObservable();
}

addCity(city: City) {   
  this.cities.push(city);
  this.observableCities.next( this.cities);
}

//si hay dos ciudades que se llaman igual borra las dos, lo suyo seria buscar por un id
deleteCity(NameEntity: string) {  
    this.cities = this.cities.filter(v => v.NameEntity !== NameEntity);
    this.observableCities.next( this.cities);
}
  

}