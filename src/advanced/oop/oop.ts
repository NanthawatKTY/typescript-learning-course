
//OOP  Class and Object///

//Class
class Employees{
    //properties//
    private empCode: number;
    private empName: string;
    readonly empDepartment: string;
    salary?: number;

    //constructor//
    constructor(empCode: number, empName: string, empDepartment: string, salary?: number){
        this.empCode = empCode;
        this.empName = empName;
        this.empDepartment = empDepartment;
        this.salary = salary;
    }
    //method//
    public showDetails(){
        console.log(`Name: ${this.empName}, Department: ${this.empDepartment}, Salary: ${this.salary}`);
        
    }
}


//Object
const emps1 = new Employees(1, "Uri", "IT Support");
const emps2 = new Employees(2, "Tae nama", "SE", 100000);

// emps1.empDeapartment = "QA"
// emps1.empCode = 1
// emps1.empName = "Memew"
// emps1.salary = 100000

console.log(emps1);
console.log(emps2);

//Show method
emps1.showDetails()
emps2.showDetails()
