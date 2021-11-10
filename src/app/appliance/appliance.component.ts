import { Component, OnInit } from '@angular/core';
import {ApplianceService} from "../serviceAppliance/appliance.service";
import {TypeComponent} from "../type/type.component";
import {ServiceTypeService} from "../serviceType/service-type.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-appliance',
  templateUrl: './appliance.component.html',
  styleUrls: ['./appliance.component.css']
})
export class ApplianceComponent implements OnInit {
  typesAppliances: any;
  typesAppliancespdf: any;
  modalAppliance:boolean=false;
  applianceModification: any;
  appliance: any;
  booleanajout:boolean=false;
 test=[{id:"1",name:"Bonjour"},
   {id:"2",name:"Bonsoir"}]

  constructor(protected serviceAppliance:ApplianceService,protected typeService:ServiceTypeService) { }

  ngOnInit(): void
  {
  this.afficherT();
  this.affichierAppliance();
  }
//modifier les appliances
  modifierAppliance(id: any, applianceModification: any)
  {
  this.serviceAppliance.modifierApplia(id,applianceModification).pipe(take(1)).subscribe(()=>{this.afficherAppliancesucces(applianceModification)});
    setTimeout(()=>{this.affichierAppliance()}, 50);
    this.modalAppliance=false;
  }

//ajoute une appliance
  ajouterAppliance(appliance:any)
  {
    console.log("les appliance :",appliance);
    this.serviceAppliance.ajouterAppliance(appliance.value).pipe(take(1)).subscribe(()=>{this.afficherAppliancesucces(appliance)});
    this.booleanajout=false;
  }
//mise ajour des appliances
  miseAjourAppliance(c: any)
  {
    this.applianceModification=c;
    console.log(this.applianceModification);
    this.modalAppliance=true;
  }

  //afficher les types d'appliances
  afficherT()
  {
    this.typeService.ServiceGetType().pipe(take(1)).subscribe(data=>{this.typesAppliances=data;
    console.log(this.typesAppliances)},error =>{console.log(error)} )
  }

  //afficher les appliances
  affichierAppliance()
  {
    this.serviceAppliance.afficherApplianceService().pipe(take(1)).subscribe(data=>{this.appliance=data;
    console.log("les appliances",this.appliance)},error =>{
      console.log(error);
    });
  }

//supprimer les appliances
  supprimerAppliance(id:any)
  {
this.serviceAppliance.supprimerAppl(id).pipe(take(1)).subscribe(()=>{this.affichierAppliance()});

  }

  //afficher les appliance apres ajout ou modification
  afficherAppliancesucces(appliance:any)
  {
    this.affichierAppliance();
    appliance.reset();
  }
//formulaire d'ajout
  ajouter()
  {
    this.booleanajout=true;
  }

  annuler()
  {
    this.booleanajout=false;
  }

  annulermodification()
  {

    this.modalAppliance=false;
  }

  afficherPdfAppliance(nom:any)
  {

   this.serviceAppliance.afficherApplianceServicePdf().pipe(take(1)).subscribe(()=>{
     console.log(nom)

     const file=new Blob([nom],{type:"application/pdf ; charset=utf-8"});
     const fileUrl=URL.createObjectURL(file);
     window.open(fileUrl);
   },error => {
     console.log(error);
   });

  }
}
