import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contact } from '../contact/contact';
import { Contacts } from '../contacts/contacts';
import { Email } from '../email/email';
import { Group } from '../group/group';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, Contact, Contacts, Email, Group],
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

  readonly featuredContact = {
    firstName: 'אייל',
    lastName: 'כהן',
    classNumber: 12,
    gradeNumber: 2026,
    subject: 'פיתוח אתרים',
    status: true,
    email: 'ayal@maarechet.com',
    phoneNumber: '050-123-4567',
    adress: 'תל אביב',
  };
}
