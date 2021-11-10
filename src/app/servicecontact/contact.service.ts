import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  protected host:string="http://localhost:8080";

  url :string="/apicontact/afficherContact";

  urlpost:string="/apicontact/ajouterContact";

  urlpatch:string="/apicontact/modification/";

  urlId:string="/apicontact/afficherContact/";


  urlSupression:string="/apicontact/deleteContact/";


  constructor(protected http:HttpClient) { }



  //Afficher les contacts
  ServiceGetContact()
  {
    return this.http.get(this.host+this.url);
  }

  //Ajouter Contact
  ServiceostContact(libelle: any)
  {
    console.log('libelle' , libelle)
    return this.http.post(this.host+this.urlpost,libelle);
  }


  //modifier par Contact
  modifierContac(_id:any,_libelle:any)
  {
    return this.http.patch(this.host+this.urlpatch+_id,_libelle);
  }

  //supprimer Contact
  supprimerConta(idtype:any)
  {
    return this.http.get(this.host+this.urlSupression+idtype);
  }
}
