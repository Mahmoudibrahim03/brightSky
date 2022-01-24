import { FeatureModule } from "./feature/feature.module";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { ResultsComponent } from './feature/results/results.component';
import { ReservationComponent } from './feature/reservation/reservation.component';
import {SearchComponent} from "./feature/search/search.component";
const routes: Routes = [
  {
    path: "",
   redirectTo:"home",
    pathMatch:"full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "results",
    component: ResultsComponent
  },
  {
    path: "reservation",
    component: ReservationComponent
  },
  {
    path: "**",
    redirectTo:"search",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
