import { Component,Output,Input, EventEmitter } from '@angular/core';
import { CountryService } from 'src/app/country.service';

export interface PeriodicElement {
  name: string;
  countryCode: string;  
}

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent {

  //listOfCountries: any;
  //countryInfo:any;

  @Input() listOfCountries:any;

  @Output() countryMoreInfo = new  EventEmitter();

  displayedColumns: string[] = ['name', 'countryCode'];

  constructor(private country_service: CountryService){

  }

  ngOnInit(){
  
  }

  getContryInformation(name:string){
    console.log("Name",name);
    this.countryMoreInfo.emit(name);
  }
  

}
