///////////////////////// Extend Interface /////////////////////////
interface Job{
    title: string,
    salary: number,
}

interface Contact{
    address: string,
    phone?: string,
}

type Person = {
    name: string,
    age?: number,
    readonly gender: string,

    //Method in interface
    info: () => void;
}

////////////////////////// Intersection Type ///////////////////////
// Intersection Type is a combination of two or more types.
type People = Person & Contact & Job


///////////// Interface structure /////////////
///////////// Interface(Readonly Modifier) /////////////
///////////// Interface(Optional) /////////////

///////////////////////// Extend Interface /////////////////////////
// interface Person extends Job, Contact{
//     name: string,
//     age?: number,
//     readonly gender: string,

//     //Method in interface
//     info: () => void;
// }

////////////////////////// Intersection Type ///////////////////////
let personUser1:People={
    name: 'John',
    age: 30,
    gender: 'male',

    //Method in interface
    info(){
        console.log(`Last view: ${new Date().toLocaleString()}`);
        
    },

    title: 'Developer',
    salary: 100000,
    address: 'Bangkok',
}

// personUser1.name = 'female'/
console.log(personUser1);
personUser1.info();


////Method in interface
// personUser1.info();


////////////////////// Interface vs Type Aliases ///////////////////////