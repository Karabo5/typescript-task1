/*//function
const greet =(name : string) : string=>{
    return `Hello ${name}, welcome to TS CodeTribe`
}

//Basic Types
//Number 
let age : number = 21;
let price : number = 500.00;
let hex : number = 0xff;
let binary : number = 0b11010;

//String 
let firstName : string = "Karabo";
let middleName : string = "Serole";
let lastName : string = "Mogano";
let greeting : string = `Hello ${firstName}`;

//Boolean
let isLoggedIn : boolean = true;
let hasPermission : boolean = false;

//Arrays (Two ways to define them)
//1.(first)
let numbers : number[] = [4,2,6,8];
let fruits : string[] = ["banana","apple","mango"]

//display array variable 
const showArray = (name : string[]) :string[] =>{
    return name
}
//console.log(showArray(fruits))

//2.(second)
let scores : Array<number> = [23,24,25,28]

//Tuple 
// Arrays with fixed length and types in a specific position
let user : [string,number] = ["Karabo",21]

//display tupple variable 
const showTupple = (name : [string,number]) : [string,number] =>{
    return name
}
//console.log(showTupple(user))

//Objects
//Basic Objects type 
//let person : (firstName:string,age : number) {firstName:"Karabo",age:21}
*/

type Employee = {
    fullName : [fisrtName : string, lastName : string];
    age : number ;
    department : string ;
    skills : string[] ;
    isActive : boolean ;
}

const emp1 : Employee = {
    fullName : ["Karabo","Mogano"],
    age : 21 ,
    department : "IT",
    skills : ["Java","PL/SQL","JavaScript"],
    isActive : true

    
}

const emp2 : Employee = {
    fullName : ["Shawn","Molepo"],
    age : 25 ,
    department : "Data",
    skills : ["Data Science","SQL","Postgre"],
    isActive : false

    
}

//function logEmployee (emp : Employee) : void{
const logEmployee = (emp:Employee) : Employee =>{
    return emp/*
    const [name,surname] = emp.fullName
    
    console.log("---Employee Details---")
    console.log(`Name :  ${name} ${surname}`)
    console.log(`Age : ${emp.age}`)
    console.log(`Department :  ${emp.department}`)  
    console.log(`Skills :  ${emp.skills}`)
    console.log(`Active : ${emp.isActive ? "Yes" : "No"}`)
    console.log(`-----------------------------`)  
    */

}
logEmployee(emp1);
logEmployee(emp2)