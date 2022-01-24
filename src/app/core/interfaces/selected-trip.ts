export interface SelectedTrip {
  from: string | undefined;
  to: string | undefined;
  demonstration: string | undefined;
  time: { date: string; departureTime: string; arrivalTime: string; } | undefined;
}
