import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../../core/services/countries.service";
import {ResultService} from "../../core/services/result.service";
import {Countries} from "../../core/interfaces/countries";
import {AvailableFlights} from "../../core/interfaces/available-flights";
import {Observable} from "rxjs";

@Component({
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  fromCountry: Countries | undefined = this.country.fromCountry
  toCountry: Countries | undefined = this.country.toCountry
  resultInfo: AvailableFlights | undefined;

  constructor(private country: CountriesService, private data: ResultService) {
  }

  ngOnInit(): void {
    this.getSearchResults(this.fromCountry, this.toCountry).subscribe((flight) => {
      console.log(flight)
      this.resultInfo = flight;
    })
  }


  getSearchResults(fromCountry: Countries | undefined, toCountry: Countries | undefined): Observable<AvailableFlights> {
    return new Observable((subscriber) => {
      this.data.getFlightData().subscribe((x) => {
        x.some((trip) => {
          if (trip.from === fromCountry?.name && trip.to === toCountry?.name) {
            console.log(trip)
            return subscriber.next(trip)
          }
        })
      })
    })
  }

  tripReservation(i: number): void {
    this.data.selectedTrip = {
      from: this.resultInfo?.from,
      to: this.resultInfo?.to,
      demonstration: this.resultInfo?.demonstration,
      time: this.resultInfo?.time[i]
    };
  }
}
