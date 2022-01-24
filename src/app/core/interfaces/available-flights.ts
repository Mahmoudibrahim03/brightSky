export interface AvailableFlights {
  from: string;
  to: string;
  demonstration: string;
  time: {
    date: string;
    "departureTime": string,
    "arrivalTime": string
  }[]
}
