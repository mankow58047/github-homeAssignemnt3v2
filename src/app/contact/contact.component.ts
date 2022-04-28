import { NgIf } from '@angular/common';
import { Component, OnInit, Input} from '@angular/core';
import { Contact } from '../contacts';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { ContactService } from './../contact.service'
export type EditorType = 'edit';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

 @Input() id: number = 0;

 contact: Contact = {fName: '', lName: '', pNumber: '', email: ''};

  editor: EditorType = 'edit'

  constructor(private contactService: ContactService) { }

  // toggleEditor(type: EditorType){
  //   this.editor = type;
  // }

  // get showEditContact() {
  //   return this.editor === 'edit';
  // }



  onDelete(): void{
    this.contactService.removeContact(this.id);
  }

  onEdit(): void{
    this.contactService.editContactIndex = this.id;
    this.contactService.display = 3;
    console.log(this.contactService.display);
  }



  ngOnInit(): void {
    this.contact = this.contactService.intContacts[this.id];
  }

}



