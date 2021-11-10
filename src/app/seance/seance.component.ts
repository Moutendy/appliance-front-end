import { Component, OnInit } from '@angular/core';
import {ServicepovService} from "../servicePov/servicepov.service";
import {SeanceService} from "../serviceSeance/seance.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {
  seance: any;
  modalSeance: boolean=false;
  Pov: any;
  seanceModification: any;
  afficherformulaire:boolean=false;

  constructor( protected servicePov:ServicepovService,protected serviceSeance:SeanceService) { }

  ngOnInit(): void
  {
    this.afficherPov();
    this.afficherSeance();

  }

  //afficher les povs
  afficherPov()
  {
    this.servicePov.afficherPovService().pipe(take(1)).subscribe(data=>{this.Pov=data;console.log(this.Pov)},
    error=>{console.log(error)});
  }
  //mise ajour de la seance
  miseAjourSeance(c: any)
  {
this.seanceModification=c;
this.modalSeance=true;
  }
//supprimer seance
  supprimerSeance(id:any)
  {

this.serviceSeance.supprimerSeance(id).pipe(take(1)).subscribe(()=>{this.afficherSeance()});
  }
  //afficher les seances
afficherSeance()
{
  this.serviceSeance.ServiceGetSeance().pipe(take(1)).subscribe(data=>{this.seance=data,console.log(this.seance)},error => {console.log(error)})

}

//ajouter une seance
  ajouterSeance(seance: any)
  {
this.serviceSeance.ServiceostSeance(seance.value).pipe(take(1)).subscribe(()=>{this.afficherSeancesucces(seance)});
    this.afficherformulaire = false;
  }

//modifier la seance
  modifierSeance(id:any, seanceModification: any)
  {
this.serviceSeance.modifierSeance(id,seanceModification).pipe(take(1)).subscribe(()=>{this.afficherSeancesucces(seanceModification)});
this.modalSeance=false;

  }

  //mise ajour apres
  afficherSeancesucces(seance:any)
  {
    this.afficherSeance();
    seance.reset();
  }

  //ajouter le formulaire d'ajout de seance
  ajouterleformuliare()
  {
    this.afficherformulaire = true;
  }
  //annuler l'affiche de formulaire de seance
  annulerleformuliare()
  {
    this.afficherformulaire = false;
  }

  annulerleformuliaremodification()
  {
    this.modalSeance=false;
  }
}
