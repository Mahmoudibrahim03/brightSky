import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { AlertModule } from 'ngx-bootstrap/alert';
import { FeatureModule } from './feature/feature.module';
import {RouterModule} from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        FeatureModule,
        BrowserModule,
        AppRoutingModule,
        AlertModule.forRoot(),
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
