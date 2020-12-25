
//button 1 with his action itis show this is home content
var button1 = document.getElementById("btn1");
hom =  button1.innerText ;
function action(){
    var div = document.getElementById("pm");
    div.innerHTML ="This is "+hom+" "+ " content";
    
}

button1.onclick = action;


//button2 with his action itis show this is profile content
var button2 = document.getElementById("btn2");
prof =  button2.innerText ;
function action1(){
    var div = document.getElementById("pm");
    div.innerHTML="This is  " +prof+"  "+"  content";
 
}

button2.onclick = action1;


//button3 with his action itis show this is messages content
var button3 = document.getElementById("btn3");
var mess = button3.innerText ;
function action3(){
    var div = document.getElementById("pm");
 div.innerHTML= "This is  " + mess +" "+ "  content";

}

button3.onclick = action3;


//button 4 with his action itis show this is settings content
var button4 = document.getElementById("btn4");
var sett = button4.innerText ;
function action4(){
    var div = document.getElementById("pm");
   div.innerHTML= "This is  " + sett + " " + "  content";
  
}

button4.onclick = action4;





