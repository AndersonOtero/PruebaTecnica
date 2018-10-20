import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city.model';
import { UserSerice } from 'src/app/services/user.service';

@Component({
  selector: 'tabs-city',
  templateUrl: './tabs-city.component.html',
  styleUrls: ['./tabs-city.component.css']
})
export class TabsCityComponent implements OnInit {

  
  cities: Array<City>

  constructor(public UserSerice:UserSerice) { 
    this.UserSerice.getCities().subscribe(
      res=>{       
        this.cities= res as Array<City>;
        console.log(this.cities)
      }
    );
  }

  ngOnInit() {
  }

}
