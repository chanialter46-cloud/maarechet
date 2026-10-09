import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  @Input() firstName = '';
  @Input() lastName = '';
  @Input() classNumber = 0;
  @Input() gradeNumber = 0;
  @Input() subject = '';
  @Input() status = true;
  @Input() email = '';
  @Input() phoneNumber = '';
  @Input() adress = '';
}
