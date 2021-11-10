import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApplianceService {

  protected host:string="http://localhost:8080";

  url :string="/apiappliance/afficherAppliance";

  urlpost:string="/apiappliance/ajouterAppliance";

  urlpatch:string="/apiappliance/modificationAppliance/";

  urlId:string="/apiappliance/afficherAppliance/";

  urlIdpdf:string="/apiappliance/affichePdf";

  urlSupression:string="/apiappliance/deleteAppliance";
  constructor(protected http:HttpClient) { }

  private readonly httOptions={
    responseType : 'arraybuffer' as 'json'
  }

  //Afficher les Appliance en pdf
  afficherApplianceServicePdf():Observable<any>
  {

    return this.http.get<any>(this.host+this.urlIdpdf);

  }
  //Afficher les Appliance
  afficherApplianceService()
  {
    return this.http.get(this.host+this.url);
  }

  //Ajouter l'Appliance
  ajouterAppliance(appliance: any)
  {
    console.log('libelle' , appliance);
    return this.http.post(this.host+this.urlpost,appliance);
  }


  //modifier l'Appliance
  modifierApplia(_id:any,_appliance:any)
  {
    return this.http.patch(this.host+this.urlpatch+_id,_appliance);
  }

  //supprimer l'Appliance
  supprimerAppl(idtype:any)
  {
    return this.http.get(this.host+this.urlSupression+idtype);
  }
}
