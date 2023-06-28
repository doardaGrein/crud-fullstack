export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  creationDate: string;
  authStatus : string;
  constructor(id?: number, name?: string, email?: string, password?: string, creationDate?: string, authStatus?: string) {
    this.id = id || 0;
    this.name = name || '';
    this.email = email || '';
    this.password = password || '';
    this.creationDate = creationDate || '';
    this.authStatus = authStatus || '';
  }
}
