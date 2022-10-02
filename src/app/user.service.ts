import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
// http howa object mil http client
// mech na3mel array fere8 wou nasana3 fil constructor object min service bech nest3amel methode hethika 
private getAllUsersUrl  ="users/getall";
private getAllRolesUrl  ="users/getallrole";

private getAllDepartementsUrl  ="users/getalldepartement";

// private registerUserUrl = "http://localhost:8099/users/addcollaborateur/";
private loginUserUrl = "http://localhost:8099/login";

private deleteUserUrl  ="users/deleteCollaborateur/";

private getOneUseUrl = "users/collaborateur/";
private getOneUserByUsername = "users/collaborateurByUserName/";
private updateUserUrl="users/updateCollaborateur/"

constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<any>(environment.url+this.getAllUsersUrl);
  }

  getOneUser(id:String){
    return this.http.get<any>(environment.url+this.getOneUseUrl+id);
  }

  getOneUserByUserName(userName:String){
    return this.http.get<any>(environment.url+this.getOneUserByUsername+userName);
  }

   updateUser(user:User,id:any){
    return this.http.put<any>(environment.url+"users/updateCollaborateur/"+id,user);
   }

  getAllRoles(){
    return this.http.get<any>(environment.url+this.getAllRolesUrl); 
  }

  getAllDepartements(){
    return this.http.get<any>(environment.url+this.getAllDepartementsUrl); 
  }
  

  deleteUser(id:String){
    return this.http.delete<any>(environment.url+this.deleteUserUrl+id);
    // (environment.url+"users/addcollaborateur/"+idrole,user);
  }
  
  login(user:any){
    return this.http.post<any>(environment.url+"login",user,{observe:'response'});
    // return this.http.post<any>(this.loginUserUrl,user,{observe:'response'});
  }

  register(user:any,idrole:any,iddepartement:any){
    return this.http.post<any>(environment.url+"users/addcollaborateur/"+idrole+"/"+iddepartement,user);
  }



}
