import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Astreinte } from '../models/astreinte';
import { environment} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AstreinteService {
  private getAllAstreintesUrl  ="getallastreinte";
  private deleteAstreinteUrl = "astreinte/";
  private getOneAstreinteUrl = "astreinte/";
  private updateAstreinteUrl="astreinte/";
  private addAstreinteUrl="astreinte/";
  private getcollabwithroleuseranddepartmentUrl="getcollabwithroleuseranddepartment/";
  constructor(private http:HttpClient) {}
    getAllAstreintes(){
      return this.http.get<any>(environment.url+this.getAllAstreintesUrl);
    }
    deleteAstreinte(id:String){
      return this.http.delete<any>(environment.url+this.deleteAstreinteUrl+id);
      // (environment.url+"users/addcollaborateur/"+idrole,user);
    }
    getOneAstreinte(id:String){
      return this.http.get<any>(environment.url+this.getOneAstreinteUrl+id);
    }
     updateAstreinte(astreinte:Astreinte,id:any){
      return this.http.put<any>(environment.url+this.updateAstreinteUrl+id,astreinte);
     }
     addAstreinte(astreinte:Astreinte,id:any){
      return this.http.post<any>(environment.url+this.addAstreinteUrl+id,astreinte);
     }
     getcollabwithroleuseranddepartment(){
      return this.http.get<any>(environment.url+this.getcollabwithroleuseranddepartmentUrl+1);
     }
     
}
