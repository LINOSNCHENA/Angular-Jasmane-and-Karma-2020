import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() { }

 
getUsers(): Array<{}> {
    return [
         {
          name: 'Nikolas',
          surname: 'Nchena'
      }
      ,
      {
          name: 'Lorena',
          surname: 'Nchena'
      },
      {
          name: 'Leon',
          surname: 'Nchena'
      }
    ];
}
}
