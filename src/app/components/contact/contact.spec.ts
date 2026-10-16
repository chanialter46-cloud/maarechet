import { ComponentFixture, TestBed } from '@angular/core/testing';
import { afterEach, vi } from 'vitest';
import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits updated contact details when saved', () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    const original = {
      id: 1,
      name: 'אייל כהן',
      email: 'ayal@example.com',
      address: 'תל אביב',
      group: 'פיתוח אתרים',
    };
    let savedContact = original;
    component.contact = original;
    component.saved.subscribe((contact) => (savedContact = contact));

    component.startEditing();
    component.draft!.email = 'ayal.new@example.com';
    component.save();

    expect(savedContact.email).toBe('ayal.new@example.com');
    expect(component.editing).toBe(false);
  });

  it('emits the contact id when deleted', () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    let deletedId = 0;
    component.contact = { id: 7, name: 'נועה לוי', email: 'noa@example.com', address: 'חיפה', group: 'עיצוב UX' };
    component.deleted.subscribe((contactId) => (deletedId = contactId));

    component.delete();

    expect(deletedId).toBe(7);
  });

  it('does not delete when confirmation is declined', () => {
    const confirm = vi.spyOn(window, 'confirm').mockReturnValue(false);
    let deleted = false;
    component.deleted.subscribe(() => (deleted = true));

    component.delete();

    expect(confirm).toHaveBeenCalledWith('האם ברצונך למחוק את איש הקשר הזה?');
    expect(deleted).toBe(false);
  });

  it('does not enter edit mode when confirmation is declined', () => {
    vi.spyOn(window, 'confirm').mockReturnValue(false);

    component.startEditing();

    expect(component.editing).toBe(false);
    expect(component.draft).toBeNull();
  });
});
