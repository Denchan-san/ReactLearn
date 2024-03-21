//basic function:
export default function DoSomething() {

}

//arrow function
export const DoSomething = () => {

}

const MyComponent = () => {
    return<div></div>; //react method alike
}

//default
//<button onClick={DoSomething()}></button>

//react (or why do we need to use arrow functions in most)
<button onClick={()=>{
    console.log("Hello world");
}}></button>

//don't make a shit code for big amounts of rows
if(true){
    DoSomething();
}else{
    DoSomething();
}

let age =16;
let name ="Pedro";
if(age > 10){
    name = "Pedro";
}else name = "Jake";

//more complicated:
//if age is greater than 10 : name:Pedro, otherwise name:Jack
let name1 = age > 10 ? "Pedro" : "Jack"; 

//example
const Component = () => {
    return age > 10 ? <div> Pedro </div> : <div>Jack</div>;
}

//OBJECTS
const person1 = {
    name: "Pedro",
    age: 20,
    isMarried: false,
};

//too much space
const p_name1= person.name;
const p_age1 = person.age;
const p_isMarried1 = person.isMarried;

//short one 
const {p_name,p_age,p_isMarried } = person

//extremly usefull
const person2 = {...person1, name: "Joe"};

//u like adding something but not coppies 
const names1 = ["Artem", "Sasha", "Dima"];
const names2 = [...names1, "Maxim"];

//3 most usefull and common functions in JavaScript

//.map()
//.filter()
//.reduce() [not that important IMO]

let names = ["Artem", "Sasha", "Dima"];

names.map((name)=>{
    return name + "1";
})

//react example 
names.map((name)=>{
    return <h1>{name}</h1>
})

//filter example
let namesPedro = ["Artem", "Sasha", "Dima", "Pedro", "Maxim", "Pedro"];

namesPedro.filter((name) => {
    return name !== "Pedro";
})
