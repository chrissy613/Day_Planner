//DISPLAY DATE
var date = new Date();
document.getElementById("currentDay").innerHTML = date.toString();
//INPUT TO LOCAL STORAGE
var nineamInput = document.querySelector("#nineam");
var nineamSubmit = document.querySelector("#nineamBtn");
var nineStorage = localStorage.getItem('nineamInput'); 
$("#nineamBtn").on("click", function(){
    console.log(nineamInput.value);
    localStorage.setItem("nineamInput", nineamInput.value);
})
var tenamInput = document.querySelector("#tenam");
var tenamSubmit = document.querySelector("#tenamBtn");
var tenStorage = localStorage.getItem('tenamInput'); 
$("#tenamBtn").on("click", function(){
    console.log(tenamInput.value);
    localStorage.setItem("tenamInput", tenamInput.value);
})


