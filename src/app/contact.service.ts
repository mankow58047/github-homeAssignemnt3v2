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


  // private contactURL = 'api/contacts';

  // private intContactsUrl = 'api/intContacts';
  // log: any;

  // getContacts(): Observable<Contact[]>{
  //   return this.http.get<Contact[]>(this.intContactsUrl)
  //     .pipe(
  //       catchError(this.handleError<Contact[]>('getContacts', []))
  //     );
  // }

  // // getContacts(fName: any): Observable<Contact> {
  // //   const url = `${this.intContactsUrl}/${fName}`;
  // //   return this.http.get<Contact>(url)
  // //    .pipe(tap=>
  // //     catchError(this.handleError<Contact>(`getContacts fName=${fName}`)))

  // // }

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  
  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);
  
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }




}
