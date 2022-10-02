import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter1'
})
export class SearchFilter1Pipe implements PipeTransform {

 transform(list1: any, args1?: any): any {
    if(!list1)return null;
      if(!args1)return list1;

      args1 = args1.toLowerCase();
      // args = args.astreinte.collaborateur.prenom;

     
        return  list1.filter(item1 => (item1.collaborateur.nom.includes(args1)))}
        // return  list.filter(item => (item.includes(args)))}

}
