import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactGroup, ContactInfo } from './contact.model';

@Component({
  imports: [FormsModule],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact implements OnChanges {
  @Input() contact: ContactInfo = { id: 0, name: '', email: '', address: '', group: '' };
  @Input() groups: ContactGroup[] = [];
  @Input() initialEditing = false;
  @Input() isNew = false;
  @Output() saved = new EventEmitter<ContactInfo>();
  @Output() deleted = new EventEmitter<number>();
  @Output() cancelled = new EventEmitter<number>();

  editing = false;
  draft: ContactInfo | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialEditing']?.currentValue) {
      this.draft = { ...this.contact };
      this.editing = true;
    }
  }

  startEditing(): void {
    if (!window.confirm('האם ברצונך לערוך את איש הקשר הזה?')) return;
    this.draft = { ...this.contact };
    this.editing = true;
  }

  cancelEditing(): void {
    if (this.isNew) {
      this.cancelled.emit(this.contact.id);
      return;
    }
    this.draft = null;
    this.editing = false;
  }

  save(): void {
    if (!this.draft) return;
    this.isNew = false;
    this.saved.emit({ ...this.draft });
    this.cancelEditing();
  }

  delete(): void {
    if (!window.confirm('האם ברצונך למחוק את איש הקשר הזה?')) return;
    this.deleted.emit(this.contact.id);
  }
}
