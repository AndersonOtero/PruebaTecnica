import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/app/models/city.model';
import { UserSerice } from 'src/app/services/user.service';

@Component({
  selector: 'list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {

  
  cities: Array<City>

  constructor(public UserSerice:UserSerice) { }

  ngOnInit() {

    this.UserSerice.getCities().subscribe(
      res=>{       
        this.cities= res as Array<City>;
        console.log(this.cities)
      }
    );

  }

  deleteCity(NameEntity){
    this.UserSerice.deleteCity(NameEntity);
  }

}
