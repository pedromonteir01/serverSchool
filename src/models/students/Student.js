import { v4 as uuidv4 } from 'uuid';

export class Student {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.id = uuidv4();
    }
}