import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactxService {

  constructor() { }

  getContacts(): Array<{}> {
    return [
      {
        name: 'NORIA',
        id: '1',
        mobile: '67111101',
        office: '89000001',
        stars: 'FIVE',
        createdAt: '20/12/1943'
      },
      {
        name: 'Nelson',
        id: '2',
        mobile: '9090909',
        office: '9099992',
        stars: 'THREE',
        createdAt: '20/12/2020'
      }
    ];
  }
}
