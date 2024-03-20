console.log('Hello, World')

let valueName = 'Mosh';
let age = 30;
let isApproved = false;
let valueFirstName = undefined;
let selectedColor = null;

let person = {
    valueName: 'Mosh',
    age: 30
};

person.name = 'John';

//bracket notation
let selection = 'valueName';
person['valueName'] = 'Sike'
console.log(person[selection]); 


let value =5;
console.log(value + 5);

for(let i = 0;i <5;i++ ){
    console.log(value+5+i);
}

let name = 'Joe';
let surename= 'Winner'
let fullname= name+' is a '+surename;

console.log(fullname);

class user {
    usersName
    usersSecondName
    
    constructor(usersName,usersSecondName){
        this.usersName = usersName;
        this.usersSecondName = usersSecondName;
    }

    getName(){
        return ToString(this.usersName);
    }

    getSecondName(){
        return this.usersSecondName;
    }
}

var user1 =new user('NotJoe', 'Idioto');

console.log(user1.getName);
console.log(user1.usersName);

console.log(user1.getSecondName);
console.log(user1.usersSecondName);

let selectedColors = ['red','blue'];

console.log(selectedColors.join(' and '));

console.log(selectedColors.concat('white'));
selectedColors[2] = 'grey';
selectedColors[selectedColors.length] = '1';

console.log(selectedColors.concat('green'));

console.log(selectedColors);
console.log(selectedColors[1]);

console.log(selectedColors.fill('BLACK'))
