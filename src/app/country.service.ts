import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable ,of} from 'rxjs';
import { environment } from 'src/environments/environment.development';

const BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  constructor(private http:HttpClient) { }

  getCountries() : Observable<object> {
    return this.http.get(BASE_URL+"/demo-country/v1/country/countries");
  }

  getCountryByName(name:string) : Observable<object> {
    const url =BASE_URL+`/demo-country/v1/country/countries/${name}`;
    console.log("Making HTTP GET request to :",url);
    return this.http.get(url);
  }
}

