import { Component} from '@angular/core';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  listOfCountries: any;
  countryName:any;
  population:any;
  capital:any;
  flag:any;
  countryCode:any;

  constructor(private country_service: CountryService){

  }    

  ngOnInit(){
    this.country_service.getCountries().subscribe((countries: any) => {
      this.listOfCountries = countries;
      console.log(this.listOfCountries);
      if(this.listOfCountries){
        this.countryName = this.listOfCountries[0]['name'];
        this.getCountryInfoByName(this.listOfCountries[0]['name']);
      }
    },error => {
      console.log(error);
    });    
  }

  countryMoreInfo(name: string){
    this.getCountryInfoByName(name);
  }

  getCountryInfoByName(name :string){
    this.countryName = name;
    this.country_service.getCountryByName(name).subscribe((countryInfo: any) =>{
      this.population = countryInfo["population"];
      this.capital = countryInfo["capital"];
      this.flag = countryInfo["flagFileUrl"];
      this.countryCode = countryInfo["countryCode"];
    },error =>{
     console.log(error);
    });
 }
}
