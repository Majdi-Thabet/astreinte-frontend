import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any, args?: any): any {
    if(!list)return null;
      if(!args)return list;

      args = args.toLowerCase();
      // args = args.astreinte.collaborateur.prenom;

     
        return  list.filter(item => (item.collaborateur.prenom.includes(args)))}
        // return  list.filter(item => (item.includes(args)))}
  
 

}



// export class SearchFilterPipe implements PipeTransform {

//   transform(value: any, args?: any): any {
//       if(!value)return null;
//       if(!args)return value;

//       args = args.toLowerCase();

//       return value.filter(function(data){
//           return JSON.stringify(data).toLowerCase().includes(args);
//       });
//   }

// }
