import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TypeAppliance} from "../type-appliance";

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  protected host:string="http://localhost:8080";

  url :string="/apitype/afficherType";

  urlpost:string="/apitype/ajouterType";

  urlpatch:string="/apitype/modificationType/";

  urlId:string="/apitype/afficherType/";


  urlSupression:string="/apitype/deleteType/";

  constructor(protected http:HttpClient) { }

  //Afficher les types d'appliances
  ServiceGetType()
  {
   return this.http.get(this.host+this.url);
  }

  //Ajouter le type de d'appliance
  ServiceostType(libelle: any)
  {
    console.log()
    return this.http.post(this.host+this.urlpost,libelle);
  }


  //modifier par identifiant
 identifVu(_id:any,_libelle:any)
 {
   return this.http.patch(this.host+this.urlpatch+_id,_libelle);
 }

 //supprimer le type D'appliance
  supprimertype(idtype:any)
  {
    return this.http.get(this.host+this.urlSupression+idtype);
  }

}
