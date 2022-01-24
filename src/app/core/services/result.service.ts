import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AvailableFlights} from "../interfaces/available-flights";
import {SelectedTrip} from "../interfaces/selected-trip";

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  selectedTrip: SelectedTrip | undefined;

  constructor(public http: HttpClient) {
  }

  getFlightData(): Observable<AvailableFlights[]> {
    return this.http.get<AvailableFlights[]>("../../../assets/data/flightsData.json")
  }

}
