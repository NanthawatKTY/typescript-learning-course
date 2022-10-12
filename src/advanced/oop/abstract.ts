
//OOP  Class and Object///
///////// Abstract Class //////////

abstract class Customers{
    //properties//

    //constructor with parameter properties//
    constructor(private empCode: number, private empName: string, private empDepartment: string, private empSalary?: number){}
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

    //Abstract method//
    abstract showCustomerServiceDetail():void;

}

class IT_Support extends Customers{
    constructor(empCode: number, empName: string){
        super(empCode, empName, 'IT_Support')
    }

    showCustomerServiceDetail(){
        console.log("Support Customer");
    }
}

class Developers extends Customers{
    constructor(empCode: number, empName: string, empSalary: number){
        super(empCode, empName, 'Developer naja', empSalary);
    }

    showCustomerServiceDetail(){
        console.log("Develop For Customer");
    }
}

//Object//
const cus1 = new IT_Support(1, "Uri");
const cus2 = new Developers(2, "Tae nama2", 100000);

cus1.showCustomerServiceDetail();
cus2.showCustomerServiceDetail();
