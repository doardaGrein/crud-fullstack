export class Employee {

  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  age: number;
  position: string;
  active: boolean;

  constructor(
    { id, name, email, department, salary, age, position, active }:
    { id?: number; name?: string; email?: string; department?: string; salary?: number; age?: number; position?: string; active?: boolean; } = {}) {
    this.id = id || 0;
    this.name = name || '';
    this.email = email || '';
    this.department = department || '';
    this.salary = salary || 0;
    this.age = age || 0;
    this.position = position || '';
    this.active = active!;
  }

}
