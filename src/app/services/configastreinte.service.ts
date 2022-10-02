import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Configastreinte } from '../models/configastreinte';
import { environment} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConfigastreinteService {
  private getAllConfigAstreintesUrl  ="getallconfigastreinte";
  private deleteConfigAstreinteUrl = "configastreinte/";
  private getOneConfigAstreinteUrl = "configastreinte/";
  private updateConfigAstreinteUrl="configastreinte/";
  private addConfigAstreinteUrl="configastreinte/";
  
  constructor(private http:HttpClient) { }
  getAllConfigAstreintes(){
    return this.http.get<any>(environment.url+this.getAllConfigAstreintesUrl);
  }
  deleteConfigAstreinte(id:String){
    return this.http.delete<any>(environment.url+this.deleteConfigAstreinteUrl+id);
    // (environment.url+"users/addcollaborateur/"+idrole,user);
  }
  getOneConfigAstreinte(id:String){
    return this.http.get<any>(environment.url+this.getOneConfigAstreinteUrl+id);
  }
  updateConfigAstreinte(configastreinte:Configastreinte,id:any){
    return this.http.put<any>(environment.url+this.updateConfigAstreinteUrl+id,configastreinte);
   }
  addConfigAstreinte(configastreinte:Configastreinte,id:any){
    return this.http.post<any>(environment.url+this.addConfigAstreinteUrl+id,configastreinte);
   }
  
   
}

