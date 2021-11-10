import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../entity/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  protected host:string="http://localhost:8080";



  url :string="/api/afficher";

  urlpost:string="/api/ajouter";

  urlpatch:string="/api/modificationClient/";

  urlId:string="/api/afficher/";

  urlSupression:string="/api/delete/";

  constructor(protected http:HttpClient) { }


  //ajouter les clients
  clientPost(client: any)
  {

    return this.http.post(this.host+this.urlpost,client);
  }

  //Afficher les clients
  clientget()
  {
    return this.http.get(this.host+this.url);
  }

  //modifier par identifiant les clients
  modifierClient(_id:any,_client:any)
  {
    return this.http.patch(this.host+this.urlpatch+_id,_client);
  }

  //supprimer les clients
  supprimerClie(idtype:any)
  {
    return this.http.get(this.host+this.urlSupression+idtype);
  }
}
