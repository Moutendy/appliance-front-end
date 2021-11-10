import { Component, OnInit } from '@angular/core';
import {ServiceTypeService} from "../serviceType/service-type.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  typesAppliance :Object |any;
  typesApplianceid:any;
  modal:boolean=false;

  //variable d'ajout de formulaire d'ajout
  booleanajout: boolean=false;

//variable de modification de formulaire de modification
  booleanmodification: boolean=false;

  constructor(public servicetypeservice:ServiceTypeService) { }
  ngOnInit(): void
  {
    this.getTypeC();
  }

  //afficher les types d'appliances
  getTypeC()
   {
       this.servicetypeservice.ServiceGetType().subscribe(data=>{

         this.typesAppliance=data;
         console.log(this.typesAppliance);
       },error => {
         console.log(error);})
   }

//ajouter les types d'appliances
  postType(libelle:any)
  {

    this.servicetypeservice.ServiceostType(libelle.value).pipe(take(1)).subscribe(()=>this.afficherTypesucces(libelle));

    setTimeout(()=>{this.getTypeC()}, 50);
    this.booleanajout=false;

  }

  //Afficher des types d'appliances
  miseAjour(typeA: any)
  {
    console.log(typeA);
    this.typesApplianceid=typeA;
    console.log(this.typesApplianceid);
    this.booleanmodification=true;
  }

//mise a jour des types d'appliances
  getid(_id:any,_libelle:any)
  {
    this.servicetypeservice.identifVu(_id,_libelle).pipe(take(1)).subscribe(()=>this.afficherTypesucces(_libelle));
    console.log(_libelle);
    this.booleanmodification=false;
  }

  //suppression de type d'appliance
  suppression(idtype:any)
  {
    this.servicetypeservice.supprimertype(idtype).pipe(take(1)).subscribe(()=>{this.getTypeC()});
  }
  //afficher un type apres l'ajout ou la modification


  afficherTypesucces(libelle:any)
  {
    libelle.reset();
    this.getTypeC()
  }


  ajouter()
  {
    this.booleanajout=true;
  }

  annuler()
  {
this.booleanmodification=false;
  }

  annulermodification()
  {
  this.booleanajout=false;
  }
}
