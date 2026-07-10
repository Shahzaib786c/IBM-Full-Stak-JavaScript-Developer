//Task1//

const student = {
    name: "Muhammad shahzaib",
    age: 23,
    city: "JalalpurJattah",
    Degree: "Bachelor",
    Program: "BS_SE(Software Engineering)",
    greet: function () {
        return "Hi , My name is " + this.name;
    }
};
console.log(student.name);
console.log(student["age"]);
console.log(student.city);
console.log(student["Degree"]);
console.log(student.Program);
console.log(student.greet());
console.log(student);


//Task 2//
//Array//
const Students = [                                //Creating Multiple Objects in Array//
    {
        name: "Muhammad Shahzaib",                //Object1//
        grade: 65
    },
    {
        name: "Muhammad Waqar",                   //Object2//
        grade: 76
    },
    {
        name: "Muhammad Ali",                      //Object3//
        grade: 87
    }
];
console.log(Students[2].name);
console.log(Students[1].grade);


//task 3 //
const products = {
    name: "shirt",
    size: "XL",
    Price: 750,
    color: "Red"
}
console.log(products.Price);
products.name = "POLO"
console.log(products.name);



// try it yourself//
const students = [
    { name: "Sara", grade: 85 },
    { name: "Ali", grade: 40 },
    { name: "Mona", grade: 70 }
];
const loop = students.forEach((student) => {
    console.log(student.name + " scored " + student.grade);
});
