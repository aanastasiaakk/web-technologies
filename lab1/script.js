let element = document.getElementsByClassName("message")[0];

let button = document.getElementById("myButton");

button.addEventListener("click", function () {
    element.innerText = "Hello world!";
    console.log("Анастасія Кливчук"); 
});