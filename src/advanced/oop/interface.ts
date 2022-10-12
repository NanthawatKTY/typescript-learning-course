/////// Interface with abstaract class ///////
// Class can inherit from multiple interfaces, but can only inherit from one class.
// So we have to change abstract class to interface
interface InReport{
    income:number;
    reportIncome():void;
}

///////// Abstract Class //////////

abstract class DevPosition{
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

class SE extends DevPosition implements InReport{
    income: number;
    constructor(empCode: number, empName: string, empSalary: number){
        super(empCode, empName, 'IT_Support')
        this.income = empSalary
    }

    showCustomerServiceDetail(){
        console.log("Support Customer");
    }

    reportIncome(){
        console.log(`Income: ${this.income * 12}/Year`);
    }
}

class QA extends DevPosition implements InReport{
    income: number;
    constructor(empCode: number, empName: string, empSalary: number){
        super(empCode, empName, 'Developer naja', empSalary);
        this.income = empSalary
    }

    showCustomerServiceDetail(){
        console.log("Develop For Customer");
    }

    reportIncome(){
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
