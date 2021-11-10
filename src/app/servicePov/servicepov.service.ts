import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicepovService {
  protected host:string="http://localhost:8080";

  url :string="/apipov/afficherPov";

  urlpost:string="/apipov/ajouterPov";

  urlpatch:string="/apipov/modificationPov/";

  urlId:string="/apipov/afficherPov/";


  urlSupression:string="/apipov/deletePov/";

  urlrechercherClient:string="/apipov/recherchePov/";

  constructor(protected http:HttpClient) { }



  //Afficher les Pov
  afficherPovService()
  {
    return this.http.get<Array<any>>(this.host+this.url);
  }

  //Ajouter Pov
  ajouterPov(pov: any)
  {
    console.log('libelle' , pov);
    return this.http.post(this.host+this.urlpost,pov);
  }


  //modifier Pov
  modifierPov(_id:any,_pov:any)
  {
    return this.http.patch(this.host+this.urlpatch+_id,_pov);
  }

  //supprimer Pov
  supprimerPov(idtype:any)
  {
    return this.http.get(this.host+this.urlSupression+idtype);
  }

  //rechercher les client qui ont un Pov
  rechercherPovClient(idClient:any)
  {
    return this.http.get(this.host+this.urlrechercherClient+idClient);
  }
}
