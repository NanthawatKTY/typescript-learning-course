"use strict";
//OOP  Class and Object///
//Class//
class Employees {
    //properties//
    // private empCode: number;
    // private  empName: string;
    // private empDepartment: string;
    // private empSalary: number;
    //constructor with parameter properties//
    constructor(empCode, empName, empDepartment, empSalary) {
        this.empCode = empCode;
        this.empName = empName;
        this.empDepartment = empDepartment;
        this.empSalary = empSalary;
        // # Default constructor value before assign value from parameter properties # //
        // this.empCode = empCode;
        // this.empName = empName;
        // this.empDepartment = empDepartment;
        // this.salary = salary;
    }
    //method//
    showDetails() {
        console.log(`Name: ${this.empName}, Department: ${this.empDepartment}, Salary: ${this.empSalary}`);
    }
    //getter and setter//
    //Getter(Get data from private properties)
    get Salary() {
        return this.empSalary || 0;
    }
    //Setter(Set data to private properties)
    set Salary(newSalary) {
        this.empSalary = newSalary;
    }
}
//Object//
const emps1 = new Employees(1, "Uri", "IT Support");
const emps2 = new Employees(2, "Tae nama", "SE", 100000);
// emps1.empDeapartment = "QA"
// emps1.empCode = 1
// emps1.empName = "Memew"
// emps1.salary = 100000
// console.log(emps1);
// console.log(emps2);
//Show method//
// emps1.showDetails()
// emps2.showDetails()
//Getter and Setter//
// emps1.Salary = 10000000
emps1.showDetails();
console.log(emps1.Salary);
