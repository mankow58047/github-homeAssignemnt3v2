import { Component, OnInit, Output } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { Contact } from './../contacts';
import { ContactService } from './../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  //addForm: FormGroup;

  constructor(private contactService: ContactService) {}

  add(fName: string, lName: string, phone: string, email: string) {
    const newContact: Contact = {
      fName: fName,
      lName: lName,
      pNumber: phone,
      email: email,
    };
    this.contactService.addContact(newContact);
    this.contactService.display = 1;
  }

  ngOnInit(): void {}
}
