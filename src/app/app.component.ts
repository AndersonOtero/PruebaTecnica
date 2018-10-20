import { Component } from '@angular/core';
import { City } from './models/city.model';
import { UserSerice } from './services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ShowSpinner:boolean = false; 
  city:City = new City();
  
  formCity: FormGroup;

  constructor(public UserSerice:UserSerice) { 
    this.formCity = new FormGroup({
      "city": new FormControl('',[Validators.required])
    })
  }
  
  addCity(){
    this.ShowSpinner = true;

    //el settime es para que se vea el laoder
    setTimeout(()=>{

      let data = this.formCity.getRawValue().city;
      if(data != "" && data != null && data != undefined ){
        this.city.NameEntity = data;
        this.UserSerice.addCity(this.city);
        //renovamos este elemento para cambiar el puntero de memoria
        this.city = new City();        
      }
      
      this.formCity.controls["city"].setValue(null);
      this.ShowSpinner = false;
      
    },1000)
  }
}
