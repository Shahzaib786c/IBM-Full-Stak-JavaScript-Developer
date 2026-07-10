//Normal Function without parameter //
function greet() {
    console.log("Hello! And Wel Come Muhammad Moui")
}
greet()

// Normal Function with parameter//
function Welcome(name) {
    return "Hello," + name + "!";
}
console.log(Welcome("Muhammad Shahzaib"))
console.log(Welcome("Muhammad Waqar"))
console.log(Welcome("Muhammad Ali"))
console.log(Welcome("Muhammad Riaz"))

// Normal Function with Multiple parameter//

function add(num1, num2) {
    return "Your Addition number is," + num1 + num2 + "!";

}
console.log(add(12 + 12));


function fan() {
    console.log("Hello!! Students ")
}
fan();
greet();
function sub(num1, num2) {
    return num1 - num2;
}
console.log(sub(19, 9));

function mul(num1, num2) {
    return "Your Multiplication nuumber is " + num1 * num2 + ".";
}
console.log(mul(12, 12));


function about() {
    console.log("My Name is Muhammad Shahzaib");
    console.log("I am a BSSE Graduated Student");
    console.log("Now i am doing A course of IBM Stack JavaScript Developer");
}
about();

function welcome1(name) {
    console.log("Hello ," + name);
}

welcome1("Muhammad Haseeb");
welcome1("Muhammad Adeel")
welcome1("Muhammad ALI")
welcome1("Muhammad Umar")
welcome1("Muhammad Ashraf")
welcome1("Muhammad Riaz")

function hlo(name, age) {
    // console.log("Your name is " +name);
    // console.log("your age is " +age);
    return "Your perfect name is " + name;
    return "Your perfect age is " + age;
}
console.log(hlo("SHAHZAIB", 23));
console.log(hlo("WAQAR", 25));
console.log(hlo("RIAZ", 31));
console.log(hlo("MUSTAFA", 22));             // with console inside curlybraces it shows complete output//
console.log(hlo("MURTAZA", 22));                     //why it does not show the age //
console.log(hlo("ali", 29));
console.log(hlo("Haseeb", 23));


function hlo(name, age, city) {
    console.log("Your name is " + name);
    console.log("your age is " + age);
    console.log("your city is " + city);                    //this is showingcomplete msg and out output //

}
hlo("Muhammad Riaz", 32, "Gujrat");
hlo("Muhammad Ali", 29, "jalal-pur-jattah");
hlo("Muhammad Shahzaib", 22, "Lahore");



//1. Arrow Function with Single parameter//

const name = (name) => {
    console.log("Your name is " + name)
}

name("Muhammad Shahzaib")


//2. with multiple parameter //
const addition = (a, b) => {
    return a + b;
};

console.log(addition(5, 3));


//3.shortest Arrow function with one parameter//
const square = (x) => x * x;
console.log(square(5));


