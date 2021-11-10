import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  protected host:string="http://localhost:8080";

  url :string="/apiseance/afficherSeance";

  urlpost:string="/apiseance/ajouterSeance";

  urlpatch:string="/apiseance/modificationSeance/";

  urlId:string="/apiseance/afficherSeance/";


  urlSupression:string="/apiseance/deleteSeance/";


  constructor(protected http:HttpClient) { }


  //Afficher la Seance
  ServiceGetSeance()
  {
    return this.http.get(this.host+this.url);
  }

  //Ajouter Seance
  ServiceostSeance(libelle: any)
  {
    console.log('libelle' , libelle)
    return this.http.post(this.host+this.urlpost,libelle);
  }


  //modifier par Seance
  modifierSeance(_id:any,_libelle:any)
  {
    return this.http.patch(this.host+this.urlpatch+_id,_libelle);
  }

  //supprimer Seance
  supprimerSeance(idtype:any)
  {
    return this.http.get(this.host+this.urlSupression+idtype);
  }
}
