interface Geo {
    lat: string;
    lng: string;
  }
  
  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }
  
  interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  
  export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  
    constructor(
      id: number,
      name: string,
      username: string,
      email: string,
      address: Address,
      phone: string,
      website: string,
      company: Company
    ) {
      this.id = id;
      this.name = name;
      this.username = username;
      this.email = email;
      this.address = address;
      this.phone = phone;
      this.website = website;
      this.company = company;
    }
  }
  