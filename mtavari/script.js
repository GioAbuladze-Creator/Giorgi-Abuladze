//navigation functions
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//slider functions
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

setInterval(function(){
    plusDivs(1);
},2000);

function showDivs(n) {
  var i;
  var slide = document.getElementsByClassName("slides");
  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  slide[slideIndex-1].style.display = "block";  
  
}
