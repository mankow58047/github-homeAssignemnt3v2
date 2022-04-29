import { Injectable } from '@angular/core';
import { Contact } from './contacts';
// import { CONTACT } from './mock-contacts';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  display: number = 1;
  editContactIndex: number = 0;

   intContacts: Contact[] = [
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

  constructor(private http: HttpClient) { }

  addContact(newContact: Contact){
    this.intContacts.push(newContact);
  }

  removeContact(id: number){
    this.intContacts.splice(id, 1);
  }

  editContact(contact:Contact, id: number){
    this.intContacts[id] = contact;
  }

}
