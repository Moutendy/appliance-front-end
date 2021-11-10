import { Component, OnInit } from '@angular/core';
import {TypeComponent} from "../type/type.component";
import {PovComponent} from "../pov/pov.component";
import {ServicesuivieService} from "../servicesuivie/servicesuivie.service";
import {ServiceTypeService} from "../serviceType/service-type.service";
import {ServicepovService} from "../servicePov/servicepov.service";
import {take} from "rxjs/operators";
import {TypeprestationService} from "../serviceTypeprestation/typeprestation.service";

@Component({
  selector: 'app-suivie',
  templateUrl: './suivie.component.html',
  styleUrls: ['./suivie.component.css']
})
export class SuivieComponent implements OnInit {
  suivie: any;
  modalSuivie: boolean=false;
  Types: any;
  Pov: any;
  suivieModification: any;
  afficherformulaire: boolean=false;

  constructor(protected type:TypeprestationService,protected listePov:ServicepovService,protected serviceSuivie:ServicesuivieService) { }

  ngOnInit(): void
  {
    this.afficheType();
    this.affichePov();
    this.afficherSuivie();
  }
//methode de mise a jour
  miseAjourSuivie(c: any)
  {
this.suivieModification=c;
this.modalSuivie=true;
  }
//afficher les types sur le select
  afficheType()
  {

    this.type.servicegetTypePrestat().pipe(take(2)).subscribe(data=>{this.Types=data
    console.log(data);},error => {console.log(error)});
  }
  //afficher les povs sur le select
  affichePov()
  {
    this.listePov.afficherPovService().pipe(take(1)).subscribe(data=>{this.Pov=data,console.log(this.Pov)})
  }
//supprimer le suivie
  supprimerSuivie(id:any)
  {
 this.serviceSuivie.supprimerSuivie(id).pipe(take(1)).subscribe(()=>{this.afficherSuivie()});
  }
//ajouter un suivie
  ajouterSuivie(suivie: any)
  {
    console.log(suivie.value);
   this.serviceSuivie.ServiceostSuivie(suivie.value).pipe(take(1))
     .subscribe(()=>this.handleSuccessAjouterSuivie(suivie));
    this.afficherformulaire=false;

   }
//methode de mise a jour pour afficher la liste du suivie
  handleSuccessAjouterSuivie(suivie:any){
    suivie.reset();
    this.afficherSuivie();
  }
  //modifier le suivie
  modifierSuivie(id:any, suivieModification: any)
  {
 this.serviceSuivie.modifierSuivie(id,suivieModification).pipe(take(1)).subscribe(()=>this.handleSuccessAjouterSuivie(suivieModification));
 this.modalSuivie=false;

  }
  //afficher les suivies

  afficherSuivie()
  {
    this.serviceSuivie.ServiceGetSuivie().pipe(take(1)).subscribe(data=>{this.suivie=data,console.log(this.suivie)});

  }
//methode pour afficher le formulaire d'ajout
  afficherformulaireajout()
  {
    this.afficherformulaire=true;
  }

  //methode pour fermer le formulaire de modification
  annuler()
  {
    this.modalSuivie=false;
  }
//fermer le formulaire d'ajout
  annulerformulaire()
  {
    this.afficherformulaire=false;
  }
}
