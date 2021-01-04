
//function for the tabs
function openbtn(evt, Namebtn) {
    // Declare all variables
    var i, btncontent, tapslink;
  
    // Get all elements with class="btncontent" and hide them
    btncontent = document.getElementsByClassName("btncontent");
    for (i = 0; i < btncontent.length; i++) {
        btncontent[i].style.display = "none";
    }
  
    // Get all elements with class="tapslink" and remove the class "active"
    tapslink = document.getElementsByClassName("tapslink");
    for (i = 0; i < tapslink.length; i++) {
      tapslink[i].className = tapslink[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Namebtn).style.display = "block";
    evt.currentTarget.className += " active"; 
    
  }
 
  
  

