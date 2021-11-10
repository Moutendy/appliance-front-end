import { Component, OnInit } from '@angular/core';
import {ContactService} from "../servicecontact/contact.service";
import {ClientComponent} from "../client/client.component";
import {take} from "rxjs/operators";
import {ClientService} from "../serviceClient/client.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
//object contact
  contact: Object |any;
  //variable du formulaire pour modifier les contacts
  contactModification: any;
  //variable client pour afficher les clients du contact
   client :any;

   //variableboolean
  editupdate:boolean=false;

  //boolean pour le formulaire ajouter
   modalformulaireTableau: boolean=false;


  constructor(protected clientAffi:ClientService,protected serviceContact:ContactService) { }

  ngOnInit(): void
  {
    this.afficheContacts();
    this.afficherClient()
  }
//afficher les contacts
  afficheContacts()
  {
  this.serviceContact.ServiceGetContact().pipe(take(1)).subscribe(data=>{this.contact=data;
  console.log(this.contact)});

  }
  //Afficher un clients
  afficherClient()
  {
   this.clientAffi.clientget().pipe(take(1)).subscribe(data=>{this.client=data;
       console.log(this.client);}
     ,error => {
     console.log(error);
   })
  }
  //mise a jour des contacts
  miseAjourContact(c:any)
  {

       this.contactModification=c;
       console.log(this.contactModification);
       this.editupdate=true;

  }


//supprimer un contact
  supprimerContact(id:any)
  {
 this.serviceContact.supprimerConta(id).pipe(take(1)).subscribe(()=>{this.afficheContacts()});


  }


//ajouter un nouveau contact
  ajouterContact(contact:any)
  {
    console.log('contact',contact.value);
   this.serviceContact.ServiceostContact(contact.value).pipe(take(1)).subscribe(()=>{this.affichagesucces(contact)});
    if(this.modalformulaireTableau)
    {
      this.modalformulaireTableau=false;
    }
    else
    {
      this.modalformulaireTableau=true;
    }

  }



  //mise  ajour pour l'affichage instantane
  affichagesucces(contact:any)
  {
    contact.reset();
    this.afficheContacts();
  }


//modifier un contact
  modifierContact(id:any, contactModification: any)
  {
    this.serviceContact.modifierContac(id,contactModification).pipe(take(1)).subscribe(()=>{this.affichagesucces(contactModification)})
     this.editupdate=false;
  }
//interrupteur de formulaire cote ajouter de formulaire
  formulaireTable()
  {

 if(this.modalformulaireTableau)
 {
   this.modalformulaireTableau=false;
 }
 else
 {
   this.modalformulaireTableau=true;
 }

  }
//interrupteur de formulaire cote ajouter de tableau



  annulerAjouter()
  {
    if(this.modalformulaireTableau)
    {
      this.modalformulaireTableau=false;
    }
    else
    {
      this.modalformulaireTableau=true;
    }
  }

  annulerModification()
  {
    this.editupdate=false;
  }
}
