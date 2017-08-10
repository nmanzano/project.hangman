$(document).ready(function() {

var word = ['a', 'b', 'c'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
       'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
       't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lives = 10;

function loselives(){
  lives - 1;
}
if(lives == 0){
  alert("Game Over");
}

$( "#amountlives" ).append("Lives: " + lives);


});
