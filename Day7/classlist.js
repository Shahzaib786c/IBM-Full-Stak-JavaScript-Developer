const button = document.getElementById("btn1");
// button.classList.add("enabled");
// button.classList.remove("enabled");
// button.classList.add("hover");
// button.addEventListener("mouseover",event=>{
//     event.target.classList.add("hover");
// });
// button.addEventListener("mouseout",event=>{
//     event.target.classList.remove("hover");
// });

console.log(button.classList.contains("enabled"));

button.addEventListener("mouseover",event=>{
    event.target.classList.toggle("hover");

});button.addEventListener("mouseout",event=>{
    event.target.classList.toggle("hover");
});