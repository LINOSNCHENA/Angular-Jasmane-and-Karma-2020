import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor() { }

    getContacts(): Array<{}> {
        return [
            {
                id: 1,
                name: 'Challotte',
                mobile: '84957',
                office: '46586897',
                stars: 'four',
                createdAt: 'Nchena'
            },

            {
                id: 2,
                name: 'Wendy',
                mobile: 'Nchena',
                office: 'Nchena',
                stars: 'Nchena',
                createdAt: 'Nchena'
            }
            ,
            {
                id: 3,
                name: 'Ireen',
                mobile: '8475686',
                office: '3453453',
                stars: 'Three',
                createdAt: '12/12/2020'
            }
            ,
            {
                id: 4,
                name: 'Vannessa',
                mobile: 'Nchena',
                office: 'Nchena',
                stars: 'Nchena',
                createdAt: '12/12/2022'
            }
            ,
            {
                id: 5,
                name: 'Catherine',
                mobile: 'Nchena',
                office: 'Nchena',
                stars: 'Nchena',
                createdAt: 'Nchena'
            }
            ,
            {
                id: 6,
                name: 'Noria',
                mobile: 'Nchena',
                office: 'Nchena',
                stars: 'Nchena',
                createdAt: 'Nchena'
            }
        ];
    }
}
