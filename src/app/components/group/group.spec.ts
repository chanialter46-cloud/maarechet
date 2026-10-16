import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Group } from './group';

describe('Group', () => {
  let component: Group;
  let fixture: ComponentFixture<Group>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Group],
    }).compileComponents();

    fixture = TestBed.createComponent(Group);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('counts contacts assigned to each group', () => {
    component.contacts = [
      { id: 1, name: 'אייל כהן', email: 'ayal@example.com', address: 'תל אביב', group: 'פיתוח אתרים' },
      { id: 2, name: 'נועה לוי', email: 'noa@example.com', address: 'חיפה', group: 'עיצוב UX' },
      { id: 3, name: 'דנה רז', email: 'dana@example.com', address: 'חיפה', group: 'פיתוח אתרים' },
    ];

    expect(component.countContacts('פיתוח אתרים')).toBe(2);
    expect(component.countContacts('עיצוב UX')).toBe(1);
    expect(component.countContacts('AI ונתונים')).toBe(0);
  });
});
