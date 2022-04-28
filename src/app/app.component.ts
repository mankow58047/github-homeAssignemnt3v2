import { Component } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService],
})
export class AppComponent {
  title = 'homeAssignment-3';
  display: number = 1;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.display = this.contactService.display;
  }

  showList() {
    // this.display = 1;
    this.contactService.display = 1;
    //return this.editor === 'list';
  }

  showAdd() {
    // this.display = 2;
    this.contactService.display = 2;
    // return this.editor === 'add';
  }

  ngDoCheck() {
    this.display = this.contactService.display;
  }
}
