const button = document.getElementById("btn1");
const message = document.getElementById("msg");
const count = 0;
button.addEventListener("click", function () {
    // count++;
    // count=count+1;
    message.textContent = "you clicked the button";
    console.log("Button Was Clicked");
});