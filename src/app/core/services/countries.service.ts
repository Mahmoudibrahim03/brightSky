import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Countries} from "../interfaces/countries";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  fromCountry: Countries | undefined;
  toCountry: Countries | undefined;

  constructor(public http: HttpClient) {
  }

  getCountries(): Observable<Countries[]> {
    return this.http.get<Countries[]>("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json")
  }
}
