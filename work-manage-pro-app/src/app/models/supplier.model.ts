export class Supplier {
  id: number;
  name: string;
  address: string;
  contactName: string;
  email: string;
  phone: string;

  constructor(
    id: number, name: string, address: string,
    contactName: string, email: string, phone: string
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.contactName = contactName;
    this.email = email;
    this.phone = phone;
  }

}
