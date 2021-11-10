import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicesuivieService {

  protected host:string="http://localhost:8080";

  url :string="/apisuivie/affichersuivie";

  urlpost:string="/apisuivie/ajoutersuivie";

  urlpatch:string="/apisuivie/modificationSuivie/";

  urlId:string="/apisuivie/affichersuivie/";


  urlSupression:string="/apisuivie/deletesuivie/";
  constructor(protected http:HttpClient) { }

  //Afficher le Suivie
  ServiceGetSuivie()
  {
    return this.http.get(this.host+this.url);
  }

  //Ajouter Suivie
  ServiceostSuivie(libelle: any)
  {
    console.log('libelle' , libelle)
    return this.http.post(this.host+this.urlpost,libelle);
  }


  //modifier par Suivie
  modifierSuivie(_id:any,_libelle:any)
  {
    return this.http.patch(this.host+this.urlpatch+_id,_libelle);
  }

  //supprimer Contact
  supprimerSuivie(idtype:any)
  {
    return this.http.get(this.host+this.urlSupression+idtype);
  }
}
