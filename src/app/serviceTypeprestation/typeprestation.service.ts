import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TypeprestationService {

  protected host:string="http://localhost:8080";

  url :string="/apitypeprestation/afficherTypeprestation";

  urlpost:string="/apitypeprestation/ajouterTypeprestation";

  urlpatch:string="/apitypeprestation/modificationTypeprestation/";

  urlId:string="/apitypeprestation/afficherTypeprestation/";

  urlSupression:string="/apitypeprestation/deleteTypeprestation/";

  constructor(protected http:HttpClient) { }

   //ajouter le type de prestation
  servicePostTypePrestation(libelle: any)
  {

    return this.http.post(this.host+this.urlpost,libelle);
  }

  //Afficher les type de prestation
  servicegetTypePrestat()
  {
    return this.http.get(this.host+this.url);
  }

  //modifier par identifiant des type de prestation
 modifierTypePresta(_id:any,_libelle:any)
  {
    return this.http.patch(this.host+this.urlpatch+_id,_libelle);
  }

  //supprimer des types de prestations
  supprimerTypePrestat(idtype:any)
  {
    return this.http.get(this.host+this.urlSupression+idtype);
  }

}
