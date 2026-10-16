import { Component, Input } from '@angular/core';
import { ContactGroup, ContactInfo } from '../contact/contact.model';

@Component({
  imports: [],
  selector: 'app-group',
  styleUrl: './group.css',
  templateUrl: './group.html',
})
export class Group {
  @Input() groups: ContactGroup[] = [];
  @Input() contacts: ContactInfo[] = [];

  countContacts(groupName: string): number {
    return this.contacts.filter((contact) => contact.group === groupName).length;
  }
}
