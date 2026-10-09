import { Component, Input } from '@angular/core';
import { Email } from '../email/email';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  @Input() firstName: string='';
  @Input() lastName: string='';
  @Input() classNumber: number=0;
  @Input() gradeNumber: number=0;
  @Input() subject: string='';
  @Input() status: Boolean= true;
  @Input() email: Email='';
  @Input() phoneNumber: string='';
  @Input() adress: string='';


}
