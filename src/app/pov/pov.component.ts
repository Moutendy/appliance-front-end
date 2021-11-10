import { Component, OnInit } from '@angular/core';
import {ApplianceService} from "../serviceAppliance/appliance.service";
import {ClientService} from "../serviceClient/client.service";
import {ServicepovService} from "../servicePov/servicepov.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-pov',
  templateUrl: './pov.component.html',
  styleUrls: ['./pov.component.css']
})
export class PovComponent implements OnInit {
  pov: any;
  modalPov: boolean=false;
  client: any;
  appliance: any;
  povModification: any;
  errorMsgDisplay: boolean = false;
  afficherformulaire: boolean = false;
  validationMsgDisplay: boolean = false;
  validationModificationDisplay: boolean = false;
  annulerModificationDisplay:boolean=false;
  annulerAjoutDisplay:boolean=false;


  constructor(protected serviceAppliance:ApplianceService,protected serviceClient:ClientService,protected servicePov:ServicepovService) { }

  ngOnInit(): void
  {
    this.afficherClient();
    this.afficherAppliance();
    this.afficherPovs();
  }
//afficher les  clients
  afficherClient()
  {
    this.serviceClient.clientget().pipe(take(1)).subscribe(data=>{this.client=data;
    console.log(this.client)},error => {console.log(error)});
  }
  //afficher les appliances
  afficherAppliance()
  {
    this.serviceAppliance.afficherApplianceService().pipe(take(1)).subscribe(data=>{this.appliance=data;
    console.log(this.appliance)});
  }
  //mise a jour des povs
  miseAjourPov(c: any)
  {
    this.povModification=c;
    this.modalPov=true;
  }
//supprimer les povs
  supprimerPov(id:any)
  {
   this.servicePov.supprimerPov(id).pipe(take(1)).subscribe(()=>this.afficherPovs());

  }
//ajouter un Pov
  ajouterPov(pov: any)
  {
    this.errorMsgDisplay = false;
    let debut =new Date(pov.value.datededebut);
    let fin = new Date(pov.value.datedefin);

    if(debut<fin)
    {
      this.servicePov.ajouterPov(pov.value).pipe(take(1)).subscribe(()=>this.affichersucces(pov));
      this.afficherformulaire = false;
      this. validationMsgDisplay=true;
    }
    else
    {
      console.log("mauvaise date");
      this.errorMsgDisplay = true;
    }

  }
  //methode pour tester les dates
  methodeTesteDate(testedate:boolean=true)
  {

  }

  //afficher succes de mise a jour les povs
affichersucces(entity:any)
{
  entity.reset();
  this.afficherPovs();

}
//modifier les povs
  modificationPov(id:any, povModification: any)
  {
    let debut =new Date(povModification.datededebut);
    let fin = new Date(povModification.datedefin);
    if(debut<fin)
    {
      this.servicePov.modifierPov(id,povModification).pipe(take(1)).subscribe(()=>this.affichersucces(povModification));
      this.modalPov=false;
      this.validationModificationDisplay=true;

      if(this.annulerModificationDisplay)
      {
        this.annulerModificationDisplay=false;
      }
      else
      {
        this.annulerModificationDisplay=true;
      }
    }else
    {
      console.log("mauvaise date");
      this.errorMsgDisplay = true;
    }




  }
  //afficher les povs

  afficherPovs()
  {
    this.servicePov.afficherPovService().pipe(take(1)).subscribe(data=>{this.pov=data;
    console.log(this.pov)},error => {console.log(error)});
  }


  ajouterformulaire()
  {
    this.afficherformulaire = true;
  }
  annulerformulaire()
  {
    this.afficherformulaire = false;
    this.annulerAjoutDisplay=true;
    this.annulerModificationDisplay=false;

  }
  annulerformulairedemodification()
  {
    this.modalPov=false;
    this.annulerModificationDisplay=true;
    this.annulerAjoutDisplay=false;

  }


}
