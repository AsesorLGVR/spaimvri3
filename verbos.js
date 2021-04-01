$(document).ready(function(){
 
    $('#intro').css({'display': 'block','opacity': '1'});
    $('#intro').animate({'opacity': '0','top':'-500px'},8000);
	});
  

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
