/////////////////// Literal Types ///////////////////
type Role = 'admin' | 'user' | 'guest'
let role: Role = 'guest'
console.log(role);


/////////////////// Literal Types with Function ///////////////////
function confirmDialog(message: string, title: string | null = null) {
    console.log(message, title);
}

confirmDialog('Hello World', 'hi there')

function confirmDialog2(answer: 'yes' | 'no') {
    console.log(answer);
}

confirmDialog2('no')



//////////////////// Template Literal Types ///////////////////////
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
type HorizontalAlignment = 'left' | 'center' | 'right'

type Alignment = `${HorizontalAlignment}-${Easing}`

let alignment: Alignment = 'center-ease-in'
console.log(alignment);
