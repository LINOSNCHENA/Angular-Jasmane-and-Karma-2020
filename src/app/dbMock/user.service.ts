import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicex {
 

  constructor() { }

  getContacts(): Array<{}> {
    return [
        {
            name: 'NORIA',
            surname: 'SIMWEMBA'
        }
    ];
}
}
