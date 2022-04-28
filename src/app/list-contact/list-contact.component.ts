import { Component, OnInit, Input } from '@angular/core';

import { ContactService } from '../contact.service';
import { Contact } from '../contacts';
import { CONTACT } from '../mock-contacts';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css'],
})
export class ListContactComponent {
  @Input()
  contact!: { fName: string; lName: string; pNumber: string; email: string };

  intContacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.intContacts = this.contactService.intContacts;
    console.log(this.intContacts);
  }
}
