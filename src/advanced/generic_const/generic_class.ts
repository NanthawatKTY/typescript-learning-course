//Generic Class //
// class Stack<T>{
//     public data:T[] = [];
//     pushElement(element:T){
//         this.data.push(element);
//     }
// }

// const stack = new Stack<string>();
// stack.pushElement("Tae");
// stack.pushElement("Omae");

// console.log(stack.data);


//Generic Class Default Type //
class Stack<T = string>{
    public data:T[] = [];
    pushElement(element:T){
        this.data.push(element);
    }
}

//You can define type when you create object. 
//If you don't define type, it will use default type.
const stack = new Stack<number>();
stack.pushElement(4);
stack.pushElement(4);
console.log(stack.data);
