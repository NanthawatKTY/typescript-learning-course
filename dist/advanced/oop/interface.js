"use strict";
///////// Abstract Class //////////
class DevPosition {
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
class SE extends DevPosition {
    constructor(empCode, empName, empSalary) {
        super(empCode, empName, 'IT_Support');
        this.income = empSalary;
    }
    showCustomerServiceDetail() {
        console.log("Support Customer");
    }
    reportIncome() {
        console.log(`Income: ${this.income * 12}/Year`);
    }
}
class QA extends DevPosition {
    constructor(empCode, empName, empSalary) {
        super(empCode, empName, 'Developer naja', empSalary);
        this.income = empSalary;
    }
    showCustomerServiceDetail() {
        console.log("Develop For Customer");
    }
    reportIncome() {
        console.log(`Income: ${this.income * 12}/Year`);
    }
}
//Object//
const devPos1 = new SE(1, "Uri", 100000);
const devPos2 = new QA(2, "Tae nama2", 100000);
devPos1.reportIncome();
devPos2.reportIncome();
// devPos1.showCustomerServiceDetail();
// devPos2.showCustomerServiceDetail();
