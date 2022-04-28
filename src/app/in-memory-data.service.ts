import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './contacts';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const intContacts = [
      { 
        fName: 'John', 
        lName: 'Doe', 
        pNumber: '701-555-1234', 
        email: 'jdoe@email.com'
    },
        { 
        fName: 'Jane', 
        lName: 'Doe', 
        pNumber: '701-555-7894', 
        email: 'janedoe@email.com'
    }
    ];
    return {intContacts};
  }


}
