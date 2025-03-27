
class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }
}

class Student extends Person {
  study(): void {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach(): void {
    console.log(`${this.name} is teaching`);
  }
}

class Teacher extends Person
	{
  teach(): void 
		{
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
//window.Person = Person;
//window.Student = Student;
//window.Teacher = Teacher;

export { Person, Student, Teacher };
"()=>{cy.visit(baseUrl + "/main.html");
 cy.window().then(win => { cy.stub(win.console, "log").as("consoleLog"); 
const Teacher = win.Teacher; 
const teacher = new Teacher("Alice", 30); 
expect(teacher.name).to.equal("Alice"); teacher.teach(); 
cy.get("@consoleLog").should("be.calledWith", `${teacher.name} is teaching`); }); }"
const person = new Person("John", 25);
console.log(person.name); 

person.age = 30;  
console.log(person.age);  

const student = new Student("Alice", 22);
student.study(); 

const teacher = new Teacher("Bob", 40);
teacher.teach();  
