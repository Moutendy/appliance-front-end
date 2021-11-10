import {Component, Injectable, OnInit} from '@angular/core';
import {Client} from "../entity/client";
import {ClientService} from "../serviceClient/client.service";
import {take} from "rxjs/operators";
import {ServicepovService} from "../servicePov/servicepov.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ClientComponent implements OnInit {

  client:Object | any;
  modalClient:boolean=false;
  clientModification:any;

  desactive: boolean=false;

  //formulaire de modification
  modifierinfo:boolean=false;

  //formulaire d'ajout
  booleanajout:boolean=false;

  povClient: any[] = [];

  constructor(protected serviceclient:ClientService,protected servicePov:ServicepovService) { }

  ngOnInit(): void
  {
    this.afficheClients();
  }
//ajouter un client
  ajouterClient(client: any)
  {
  this.serviceclient.clientPost(client.value).pipe(take(1)).subscribe(()=>{this.affichersucces(client)},
    error1 => {
    console.log(error1)
  });
    this.booleanajout=false;
    client.reset();
  }

  //afficher apres ajout ou modification d'un client
  affichersucces(client:any)
  {
    this.afficheClients();

  }
  //afficher la liste des clients
  afficheClients()
  {
    this.serviceclient.clientget().pipe(take(1)).subscribe(data=>{this.client=data;
      this.servicePov.afficherPovService().pipe(take(1)).subscribe(data=>{this.povClient=data;
        console.log("client",this.client)
        console.log("pov ",this.povClient)})
      console.log(this.client)},error => {
      console.log(error)
    })
    this.servicePov.afficherPovService().pipe(take(1)).subscribe(data=>{this.povClient=data;})

  }
  hasPOV(id:any)
  {
    for(let pov of this.povClient){
      if(pov.client.id==id)
      {
        return true;
      }
    }
    return false;
  }
//mise ajour pour la modification des données
  miseAjourClient(c: any)
  {
    this.clientModification=c;
   console.log(this.clientModification);
    this.modalClient=true;

    this.modifierinfo=true;
  }

//supprimer client
  supprimerClient(id :any)
  {
    this.serviceclient.supprimerClie(id).pipe(take(1)).subscribe(()=>{this.afficheClients()});
    }
//modifier client
  modifierClient(_id:any,modifierclient:any)
  {
    this.serviceclient.modifierClient(_id,modifierclient).pipe(take(1)).subscribe(()=>{this.affichersucces(modifierclient)});
    this.modalClient=false;
    this.modifierinfo=false;
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
  }

  annulerModification()
  {
    this.modifierinfo=false;
  }


}
