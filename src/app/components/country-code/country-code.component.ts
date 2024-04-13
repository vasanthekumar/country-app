import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-country-code',
  templateUrl: './country-code.component.html',
  styleUrls: ['./country-code.component.scss']
})
export class CountryCodeComponent {

  title = 'Country Code';

  @Input() countryCode:any;

  ngOnInit(){
    
  }

}
