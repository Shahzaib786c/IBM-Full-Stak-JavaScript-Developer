//For Loop//
for (let a = 0; a <= 10; a++) {
    console.log("Here is Your For loop according to yuor COndition 0 to 10 ...." + a + "..");         //with Concatenation// 
    // console.log(a);                                                                        //with anohter console both ways good //
}
//Seprate its Clean like we write a seprate console for a ///


// Foreach Loop //
const stdarray = ["Muhammmad Ali", "Muhammad Shahzaib", "Muhammas Waqar", "Muhammmad Riaz"];
stdarray.forEach((student) => {
    console.log("Your Student Array is");
    console.log(student);
});



//foreach loop practise //
const grade = ["A+", "A", "B+", "B-", "C", "C+", "D", "D+"];
grade.forEach((grdsystem) => {
    console.log("My university grading system " + grdsystem)
});


// Looping Over Arrays //
//That means u can visit each array item through For loop OR foreach loop(We Discussed) //


//using For loop//
const hotel = ["Rooms", "Reception", "Staff", "electricity", "Wifi", "location"];
for (let hotel = 0; hotel <= hotel.length; hotel++);
console.log("Hotel have these things:   ");
console.log(hotel);


// using foreach loop //
const htl = ["Rooms", "Reception", "Staff", "electricity", "Wifi", "location"];
hotel.forEach((hl) => {
    console.log("Hotel have these things:   ");
    console.log(hl);
});
