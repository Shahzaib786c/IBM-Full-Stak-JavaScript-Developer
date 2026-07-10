let flat=["bed","Fan","Cubbord","Table","Water","Wifi"];
flat.forEach((room)=>{
    console.log("Flat should have these things: ");

    console.log(room);
    
})
console.log("Flat must have : " +flat[5]);
console.log("Also:  " +flat[0]);


console.log("Your Array Length is :"  +flat.length);

console.log(flat);


flat=[80,82,82,53,44,74,67];                                            //Array change because we saved it in let variable //
flat.forEach((room)=>{
    console.log("Flat should have these things: ");        // now each task is perform according to this array //

    console.log(room);
    
});



//  push,pop,splice  //
const array=["Muhammad Shahaib",12];
array.push("Bachelor","Graduated",3.23);
array.pop();
array.push("IBM JS Full Stack Developer ")
array.splice(4,4);           
//  to select to and from and delete oit like splice (1,4) means that 1 to 4 index delete it.  
//  splice(start, count) : the first number is where to start, the second is how many items to
// remove
console.log(array);





