"use strict";
//OOP  Class and Object///
///////// Abstract Class //////////
class Customers {
    //properties//
    //constructor with parameter properties//
    constructor(empCode, empName, empDepartment, empSalary) {
        this.empCode = empCode;
        this.empName = empName;
        this.empDepartment = empDepartment;
        this.empSalary = empSalary;
    }
    //method/
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
class IT_Support extends Customers {
    constructor(empCode, empName) {
        super(empCode, empName, 'IT_Support');
    }
    showCustomerServiceDetail() {
        console.log("Support Customer");
    }
}
class Developers extends Customers {
    constructor(empCode, empName, empSalary) {
        super(empCode, empName, 'Developer naja', empSalary);
    }
    showCustomerServiceDetail() {
        console.log("Develop For Customer");
    }
}
//Object//
const cus1 = new IT_Support(1, "Uri");
const cus2 = new Developers(2, "Tae nama2", 100000);
cus1.showCustomerServiceDetail();
cus2.showCustomerServiceDetail();
