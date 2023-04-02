
function addnum(){

var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var e = document.getElementById("e");
    if(b.value === "add"){
        e.value= parseInt(a.value)+parseInt(c.value);
    }
    
    if(b.value === "subtract"){
        e.value= parseInt(a.value)-parseInt(c.value);
    }
    if(b.value === "multiply"){
        e.value= parseInt(a.value)*parseInt(c.value);
    }
    if(b.value === "divide"){
        e.value= parseInt(a.value)/parseInt(c.value);
    }
      
 }

