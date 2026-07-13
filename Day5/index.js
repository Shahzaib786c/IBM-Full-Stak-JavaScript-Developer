//initialization of datatypes and check behaviour of changing types later//
let a = 10;
let b = 20;
const c = 40
console.log(a + b + c);
b = 50;
console.log(a + b + c);
console.log("Hello!Javacript Here");

//changing in let variable//
let name = "shahzaib"
const age = 22;
console.log("Your Name is ", name);
console.log(name, ",Your Age is", age);

name = "Ali";
console.log(name)

//with const variable//
const pi = 3.14;
let score = 0;
console.log(pi);
console.log(score);


score = +100; score
console.log(score);



//different styles of store data into different datatypes //
let temp = 10;        //number//
const city = "Jalalpurjattah"     //string//
let cloud = true;     //Boolean//
const colours = ["red", "white"];    //Array list//
const object = { name: "Shahaib" };              //Object/

console.log(typeof temp);
console.log(typeof city);
console.log(typeof cloud);
console.log(typeof colours);            //it show objects type instead of Array//
console.log(typeof object);


const change = document.querySelector("#hlo");
// console.log(change.textContent);
change.textContent = "My Name is Muhammad Shahzaib";
change.style.color = "#d97706";
change.style.fontsize = "40px";
console.log(change.textContent);
