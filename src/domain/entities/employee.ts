
export class Employee {
  id?: string;
  name?: string;
  age?: number;
  role?: string;

  //  Conferir tipo
  constructor ({id, name, age, role}: Employee) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.role = role;
  }
 }