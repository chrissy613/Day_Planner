//DISPLAY DATE
var date = new Date();
document.getElementById("currentDay").innerHTML = date.toString();

//INPUT TO LOCAL STORAGE
//9am
var nineamInput = document.querySelector("#nineam");
var nineamSubmit = document.querySelector("#nineamBtn");
var nineamStorage = localStorage.getItem('nineamInput'); 
$("#nineamBtn").on("click", function(){
    console.log(nineamInput.value);
    localStorage.setItem('nineamInput', nineamInput.value);    
})
if (localStorage.getItem('nineamInput') !== null){
    nineamInput.value = localStorage.getItem('nineamInput');
} 
//10am
var tenamInput = document.querySelector("#tenam");
var tenamSubmit = document.querySelector("#tenamBtn");
var tenamStorage = localStorage.getItem('tenamInput'); 
$("#tenamBtn").on("click", function(){
    console.log(tenamInput.value);
    localStorage.setItem('tenamInput', tenamInput.value);    
})
if (localStorage.getItem('tenamInput') !== null){
    tenamInput.value = localStorage.getItem('tenamInput');
}
//11am
var elevenamInput = document.querySelector("#elevenam");
var elevenamSubmit = document.querySelector("#elevenamBtn");
var elevenamStorage = localStorage.getItem('elevenamInput'); 
$("#elevenamBtn").on("click", function(){
    console.log(elevenamInput.value);
    localStorage.setItem('elevenamInput', elevenamInput.value);    
})
if (localStorage.getItem('elevenamInput') !== null){
    elevenamInput.value = localStorage.getItem('elevenamInput');
}
//12pm
var twelvepmInput = document.querySelector("#twelvepm");
var twelvepmSubmit = document.querySelector("#twelvepmBtn");
var twelvepmStorage = localStorage.getItem('twelvepmInput'); 
$("#twelvepmBtn").on("click", function(){
    console.log(twelvepmInput.value);
    localStorage.setItem('twelvepmInput', twelvepmInput.value);    
})
if (localStorage.getItem('twelvepmInput') !== null){
    twelvepmInput.value = localStorage.getItem('twelvepmInput');
}
//1pm
var onepmInput = document.querySelector("#onepm");
var onepmSubmit = document.querySelector("#onepmBtn");
var onepmStorage = localStorage.getItem('onepmInput'); 
$("#onepmBtn").on("click", function(){
    console.log(onepmInput.value);
    localStorage.setItem('onepmInput', onepmInput.value);    
})
if (localStorage.getItem('onepmInput') !== null){
    onepmInput.value = localStorage.getItem('onepmInput');
}
//2pm
var twopmInput = document.querySelector("#twopm");
var twopmSubmit = document.querySelector("#twopmBtn");
var twopmStorage = localStorage.getItem('twopmInput'); 
$("#twopmBtn").on("click", function(){
    console.log(twopmInput.value);
    localStorage.setItem('twopmInput', twopmInput.value);    
})
if (localStorage.getItem('twopmInput') !== null){
    twopmInput.value = localStorage.getItem('twopmInput');
}
//3pm
var threepmInput = document.querySelector("#threepm");
var threepmSubmit = document.querySelector("#threepmBtn");
var threepmStorage = localStorage.getItem('threepmInput'); 
$("#threepmBtn").on("click", function(){
    console.log(threepmInput.value);
    localStorage.setItem('threepmInput', threepmInput.value);    
})
if (localStorage.getItem('threepmInput') !== null){
    threepmInput.value = localStorage.getItem('threepmInput');
}
//4pm
var fourpmInput = document.querySelector("#fourpm");
var fourpmSubmit = document.querySelector("#fourpmBtn");
var fourpmStorage = localStorage.getItem('fourpmInput'); 
$("#fourpmBtn").on("click", function(){
    console.log(fourpmInput.value);
    localStorage.setItem('fourpmInput', fourpmInput.value);    
})
if (localStorage.getItem('fourpmInput') !== null){
    fourpmInput.value = localStorage.getItem('fourpmInput');
}
//5pm
var fivepmInput = document.querySelector("#fivepm");
var fivepmSubmit = document.querySelector("#fivepmBtn");
var fivepmStorage = localStorage.getItem('fivepmInput'); 
$("#fivepmBtn").on("click", function(){
    console.log(fivepmInput.value);
    localStorage.setItem('fivepmInput', fivepmInput.value);    
})
if (localStorage.getItem('fivepmInput') !== null){
    fivepmInput.value = localStorage.getItem('fivepmInput');
}