import { Component, OnInit } from '@angular/core';
import {TypeprestationService} from "../serviceTypeprestation/typeprestation.service";
import {error} from "@angular/compiler/src/util";
import {NgForm} from "@angular/forms";
import {take, timeout} from "rxjs/operators";

@Component({
  selector: 'app-typesprestation',
  templateUrl: './typesprestation.component.html',
  styleUrls: ['./typesprestation.component.css']
})
export class TypesprestationComponent implements OnInit {

  typesPrestation :Object |any;

  typesPrestationid:any;

  modalPrestation :boolean=false;

  booleanajout: boolean=false;


  booleanmodification:boolean=false;

  constructor(public serviceprestation:TypeprestationService) { }

  ngOnInit(): void
  {
    this.getTypePre();
  }

  //afficher les type de prestations
  getTypePre()
  {
    this.serviceprestation.servicegetTypePrestat().subscribe(data=>{this.typesPrestation=data;
    console.log(data);
    },error1 => {
      console.log(error1)
    })
  }

  //ajouter type de prestation
  postTypePrestatio(libelle:any)
  {
    this.serviceprestation.servicePostTypePrestation(libelle.value).pipe(take(1)).subscribe(()=>{this.afficherTypedeprestation(libelle)});
    libelle.reset();
    setTimeout(()=>{this.getTypePre()},50);
    this.booleanajout=false;
  }

//recupperation des type de prestation
  miseAjourPrestation(c: any)
  {
    this.typesPrestationid=c;
    console.log(this.typesPrestationid);
    this.modalPrestation=true;

    this.booleanmodification=true;

  }

  //modifier les type de prestation
  modifierTypedePrestatio(_id:any,_libelle:any)
  {
    this.serviceprestation.modifierTypePresta(_id,_libelle).pipe(take(1)).subscribe(()=>{this.afficherTypedeprestation(_libelle)});
    this.modalPrestation=false;

    this.booleanmodification=false;
    setTimeout(()=>{this.getTypePre()},50);
  }

  //supprimer les types de prestations
  supprimerTypePrestati(_ids:any)
  {
   this.serviceprestation.supprimerTypePrestat(_ids).pipe(take(1)).subscribe(()=>{this.getTypePre()});
  }
  //afficher les types de prestations apres ajout
  afficherTypedeprestation(libelle:any)
  {
    this.getTypePre();
    libelle.reset();
  }

  //fonction pour ajouter le formulaire d'ajout
  ajouterformulairedajouter()
  {
    this.booleanajout=true;
    console.log(this.booleanajout);
  }
//fonction pour fermer le formulaire d'ajout

  annuler()
  {
    this.booleanajout=false;
  this.booleanmodification=false;
  }
}
