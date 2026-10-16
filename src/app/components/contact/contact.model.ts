export interface ContactInfo {
  id: number;
  name: string;
  email: string;
  address: string;
  group: string;
}

export interface ContactGroup {
  name: string;
  color: 'blue' | 'green' | 'purple';
}