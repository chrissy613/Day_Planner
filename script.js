//DISPLAY DATE
var date = new Date();
document.getElementById("currentDay").innerHTML = date.toString();
//INPUT TO LOCAL STORAGE
var nineamInput = document.querySelector("#nineam");
var nineamSubmit = document.querySelector("#nineamBtn");
JSON.parse(localStorage.getItem("nineamInput")); 
$("#nineamBtn").on("click", function(){
    console.log(nineamInput.value);
    localStorage.setItem("nineamInput", JSON.stringify(nineamInput.value));
})

