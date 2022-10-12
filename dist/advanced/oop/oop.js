"use strict";
//OOP  Class and Object///
//Class//
class Employees {
    //constructor//
    constructor(empCode, empName, empDepartment, salary) {
        this.empCode = empCode;
        this.empName = empName;
        this.empDepartment = empDepartment;
        this.salary = salary;
    }
    //method//
    showDetails() {
        console.log(`Name: ${this.empName}, Department: ${this.empDepartment}, Salary: ${this.salary}`);
    }
    //getter and setter//
    //Getter(Get data from private properties)
    get Salary() {
        return this.salary;
    }
    //Setter(Set data to private properties)
    set Salary(newSalary) {
        this.salary = newSalary;
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
emps1.Salary = 10000000;
emps1.showDetails();
console.log(emps1.Salary);
