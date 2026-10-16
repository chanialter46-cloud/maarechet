import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact/contact';
import { ContactGroup, ContactInfo } from '../contact/contact.model';

@Component({
  imports: [Contact],
  selector: 'app-contacts',
  styleUrl: './contacts.css',
  templateUrl: './contacts.html',
})
export class Contacts {
  @Input() contacts: ContactInfo[] = [];
  @Input() groups: ContactGroup[] = [];
  @Input() newContactId: number | null = null;
  @Output() create = new EventEmitter<void>();
  @Output() saved = new EventEmitter<ContactInfo>();
  @Output() deleted = new EventEmitter<number>();
  @Output() cancelled = new EventEmitter<number>();
}
