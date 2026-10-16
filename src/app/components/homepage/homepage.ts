import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactGroup, ContactInfo } from '../contact/contact.model';
import { Contacts } from '../contacts/contacts';
import { Email } from '../email/email';
import { Group } from '../group/group';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, Contacts, Email, Group],
  styleUrl: './homepage.css',
  templateUrl: './homepage.html',
})
export class Homepage {
  readonly stats = [
    { label: 'תלמידים פעילים', value: '128', color: 'blue' },
    { label: 'קבוצות', value: '14', color: 'purple' },
    { label: 'מיילים היום', value: '46', color: 'green' },
    { label: 'סטטוסים', value: '92%', color: 'orange' },
  ];

  readonly groups: ContactGroup[] = [
    { name: 'פיתוח אתרים', color: 'blue' },
    { name: 'עיצוב UX', color: 'purple' },
    { name: 'AI ונתונים', color: 'green' },
  ];

  contacts: ContactInfo[] = [
    { id: 1, name: 'אייל כהן', email: 'ayal@maarechet.com', address: 'תל אביב', group: 'פיתוח אתרים' },
    { id: 2, name: 'נועה לוי', email: 'noa@maarechet.com', address: 'חיפה', group: 'עיצוב UX' },
    { id: 3, name: 'מיכאל רז', email: 'michael@maarechet.com', address: 'ירושלים', group: 'AI ונתונים' },
  ];
  newContactId: number | null = null;

  createContact(): void {
    if (this.newContactId !== null) return;
    const id = Math.max(0, ...this.contacts.map((contact) => contact.id)) + 1;
    const newContact: ContactInfo = {
      id,
      name: '',
      email: '',
      address: '',
      group: this.groups[0]?.name ?? '',
    };
    this.newContactId = id;
    this.contacts = [newContact, ...this.contacts];
  }

  saveContact(updatedContact: ContactInfo): void {
    this.contacts = this.contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact,
    );
    if (this.newContactId === updatedContact.id) this.newContactId = null;
  }

  deleteContact(contactId: number): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== contactId);
    if (this.newContactId === contactId) this.newContactId = null;
  }

  cancelContact(contactId: number): void {
    this.deleteContact(contactId);
  }
}
