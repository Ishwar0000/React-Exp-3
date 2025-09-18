import React from "react";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  displayInfo() {
    return `${super.displayInfo()}, Course: ${this.course}`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}`;
  }
}

const App = () => {
  const student = new Student("Alice", 20, "Computer Science");
  const teacher = new Teacher("Mr. Smith", 45, "Mathematics");

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Person Class Hierarchy</h1>

      <section style={{ marginBottom: "20px" }}>
        <h2>Student Info</h2>
        <p>{student.displayInfo()}</p>
      </section>

      <section>
        <h2>Teacher Info</h2>
        <p>{teacher.displayInfo()}</p>
      </section>
    </div>
  );
};

export default App;
