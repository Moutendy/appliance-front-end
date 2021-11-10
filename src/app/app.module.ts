import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeComponent } from './type/type.component';
import {ServiceTypeService} from "./serviceType/service-type.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { TypesprestationComponent } from './typesprestation/typesprestation.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { ApplianceComponent } from './appliance/appliance.component';
import { PovComponent } from './pov/pov.component';
import { SuivieComponent } from './suivie/suivie.component';
import { SeanceComponent } from './seance/seance.component';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterModule,Routes} from "@angular/router";
import {NgSelectModule} from "@ng-select/ng-select";



const appRoutes:Routes = [{path : 'appliance',component:ApplianceComponent},
  {path : 'contact',component:ContactComponent},
  {path : 'client',component:ClientComponent},
  {path : 'pov',component:PovComponent},
  {path : 'seance',component:SeanceComponent},
  {path : 'suivie',component:SuivieComponent},
  {path : 'type',component:TypeComponent},
  {path : 'typeprestation',component:TypesprestationComponent},
  {path:'',
  redirectTo : '/appliance',
  pathMatch: 'full'}];

@NgModule({
  declarations: [
    AppComponent,
    TypeComponent,
    TypesprestationComponent,
    ClientComponent,
    ContactComponent,
    ApplianceComponent,
    PovComponent,
    SuivieComponent,
    SeanceComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes), NgSelectModule
  ],
  providers: [ServiceTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
