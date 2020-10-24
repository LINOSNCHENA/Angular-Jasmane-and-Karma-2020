import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicex {
 

  constructor() { }

  getUsers(): Array<{}> {
    return [
        {
            name: 'NORIA',
            surname: 'SIMWEMBA'
        }
    ];
}
}
