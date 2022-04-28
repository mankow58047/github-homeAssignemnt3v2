import { Component, OnInit } from '@angular/core';
import { ContactService } from './../contact.service';
import { Contact } from './../contacts';



@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent  {

  contact: Contact = {fName: '', lName: '', pNumber: '', email: ''};
  editIndex: number = 0;

 
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.editIndex = this.contactService.editContactIndex;
    this.contact = this.contactService.intContacts[this.editIndex];
  }

  onEdit(fName: string, lName: string, phone: string, email: string) {
    const newContact: Contact = {
      fName: fName,
      lName: lName,
      pNumber: phone,
      email: email,
    };
    this.contactService.editContact(newContact,this.editIndex);
    this.contactService.display = 1;
  }

  onCancel()
  {
    this.contactService.display = 1;
  }

}
