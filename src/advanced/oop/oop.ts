
//OOP  Class and Object///

//Class//
//Class is a blueprint for creating objects. A class encapsulates data for the object.

// #Static Property# //
//Static properties are defined on the class itself and not on the prototype. Static properties are inherited by subclasses.
class Company {
    public static companyName:string = "ABC Company"
    // public static founder:string = "John Doe The Boss"
    public static employeesList:Employees[] = []

    static showCompanyData(){
        console.log(`Company Name: ${this.companyName}`);
        for (const employee of this.employeesList) {
            // employee can access to static property of Company class
            // employee are instance of Employees class
            employee.showDetails();
        }
        
    }
}


//Make Employee to be a super class
class Employees{
    //properties//
    // private empCode: number;
    // private  empName: string;
    // private empDepartment: string;
    // private empSalary: number;
    // protected companyName:string = "ABC Company"


    //constructor with parameter properties//
    constructor(private empCode: number, private empName: string, private empDepartment: string, private empSalary?: number){
        
        // # Default constructor value before assign value from parameter properties # //
        // this.empCode = empCode;
        // this.empName = empName;
        // this.empDepartment = empDepartment;
        // this.salary = salary;
    }
    //method/
    public showDetails(){
        console.log(`Name: ${this.empName}, Department: ${this.empDepartment}, Salary: ${this.empSalary}`);
        
    }

    //getter and setter//
    
    //Getter(Get data from private properties)
    get Salary(){
        return this.empSalary || 0
    }

    //Setter(Set data to private properties)
    set Salary(newSalary:number){
        this.empSalary = newSalary
    }


}

class IT extends Employees{
    // You can add constructor or not. If you don't add constructor, it will use constructor from super class.
    // And if you add constructor, you must use super() to call constructor from super class.
    constructor(empCode: number, empName: string){
        super(empCode, empName, 'IT')

         //// With protected properties, you can access from super class and sub class.////
        // console.log(`Work place: ${this.companyName}`);
        
    }
}

class Developer extends Employees{
    // You can add constructor or not. If you don't add constructor, it will use constructor from super class.
    // And if you add constructor, you must use super() to call constructor from super class.
    constructor(empCode: number, empName: string, empSalary: number){
        // super(empCode, empName, 'IT', empSalary)
        super(empCode, empName, 'Developer naja', empSalary);
        // if (empDepartment === "") {
        //     empDepartment = "Developer"
        // }

        //// With protected properties, you can access from super class and sub class.////
        // console.log(`Work place: ${this.companyName}`);
    }
}



//Object//
// const emps1 = new Employees(1, "Uri", "IT Support");
// const emps2 = new Employees(2, "Tae nama", "SE", 100000);

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
// emps1.showDetails()
// console.log(emps1.Salary);


//Inheritance btw super class and sub class//
//Inheritance is a way to create a new class for using details from an existing class without modifying it.

// const emps1 = new IT(1, "Uri");
// console.log(emps1);

// const emps2 = new Developer(2, "Tae nama2", 100000);
// console.log(emps2);

/////////////////////////////////////////////////////////////

// sub class can use public method from super class
// emps1.showDetails()
// emps2.showDetails()

/////////////////////////// Sttaic Properties and Methods ///////////////////////////
//Static Property//
// console.log(Company.companyName);
// console.log(Company.founder);

const emps1 = new IT(1, "Uri");
const emps2 = new Developer(2, "Tae nama2", 100000);
const emps3 = new Developer(3, "Tae nama3", 100000);

Company.employeesList.push(emps1)
Company.employeesList.push(emps2)
Company.employeesList.push(emps3)

// console.log(Company.employeesList);

//Static Method//
Company.showCompanyData()