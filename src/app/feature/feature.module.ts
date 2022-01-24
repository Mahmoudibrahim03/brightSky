import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { RouterModule } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { ResultsComponent } from './results/results.component';
import { HomeComponent } from "./home/home.component";
import { FeatureComponent } from './feature.component';
import { SearchComponent } from './search/search.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    FeatureComponent,
    ReservationComponent,
    ResultsComponent,
    SearchComponent,
    // ResultsComponent,
  ],
    imports: [
        CommonModule,
        NgxTypedJsModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
      ReactiveFormsModule

    ],
  exports: [
    FeatureComponent,
    HomeComponent,
    FeatureComponent,
    ReservationComponent,
    ResultsComponent,
  ],
  // schemas: [NO_ERRORS_SCHEMA]
})
export class FeatureModule { }
