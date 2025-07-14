"use strict";
const emp1 = {
    fullName: ["Karabo", "Mogano"],
    age: 21,
    department: "Computer Science",
    skills: ["Java", "SQL", "JavaScript"],
    isActive: true
};
const emp2 = {
    fullName: ["Shawn", "Molepo"],
    age: 25,
    department: "Data Science",
    skills: ["Python", "Machine Learning", "SQL"],
    isActive: false
};
const logEmployee = (emp) => {
    const [firstName, lastName] = emp.fullName;
    console.log(`---Employee Details---`);
    console.log(`Name : ${firstName} ${lastName}`);
    console.log(`Age : ${emp.age}`);
    console.log(`Department : ${emp.department}`);
    console.log(`Skills : ${emp.skills}`);
    console.log(`Active : ${emp.isActive ? "Yes" : "No"}`);
    console.log(`-----------------------`);
};
logEmployee(emp1);
logEmployee(emp2);
