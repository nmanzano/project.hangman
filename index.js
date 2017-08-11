$(document).ready(function() {
var abool = true;
var bbool = true;
var cbool = true;
var dbool = true;
var ebool = true;
var fbool = true;
var gbool = true;
var hbool = true;
var ibool = true;
var jbool = true;
var kbool = true;
var lbool = true;
var mbool = true;
var nbool = true;
var obool = true;
var pbool= true;
var qbool = true;
var rbool = true;
var sbool = true;
var tbool = true;
var ubool = true;
var vbool = true;
var wbool = true;
var xbool = true;
var ybool = true;
var zbool = true;
var word;
var words = ['pantry', 'beast', 'computer', 'spaghetti', 'library'];
var wordselected = words[Math.floor(Math.random()*5)];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
       'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
       't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lives = 10;
if(wordselected == "pantry"){
  word=['p', 'a', 'n', 't', 'r', 'y'];
  i
}else if(wordselected == "beast"){
  word=['b', 'e', 'a', 's', 't'];
}else if(wordselected == "computer"){
   word=['c', 'o', 'm', 'p', 'u', 't', 'e', 'r'];
}else if(wordselected == "spaghetti"){
  word=['s', 'p', 'a', 'g', 'h', 'e', 't', 't', 'i'];
}else if(wordselected == "library"){
  word=['l', 'i', 'b', 'r', 'a', 'r', 'y'];
}
function loselives(){
  lives - 1;
}
if(lives == 0){
  alert("Game Over");
}

$( "#amountlives" ).append("Lives: " + lives);

// $( "#message-board" ).append(`<li class='message-box'><span class='name'> `+ name+ `: </span>`+message+`</li>`);
//   });
//
// });

//$(".flex-container").append(`<div id='item1' class='flex-item'><h3 id='item10'><center>`+ alphabet[0] +`</center></h3></div>`);
// for(var i = 0; i < alphabet.length; i++ ) {
//     console.log('<div class="div">' + alphabet[i])
// }
  for (var i = 0; i < word.length; i++) {
    $(".flex-container").append(`<div id = `+word[i]+` class='flex-item'><h3 id='item10'><center>`+ word[i] +`</center></h3></div>`);
  }
  $(".buttonclass").click(function(){
     loselives();
  });


  $( "#buttona" ).click(function() {
    if(abool === true){
    $( "#a" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>A</center></h3>`);
    abool = false
  }else if(abool === false){
    return null;
  }
});
  $( "#buttonb" ).click(function() {
    if(bbool === true){
    $( "#b" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>B</center></h3>`);
    bbool = false;
  }else if(bbool === false){
    return null;
  }
});
if(cbool === true){
  $( "#buttonc" ).click(function() {
    $( "#c" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>C</center></h3>`);
    cbool = false;
  }else if(abool === false){
    return null;
  }
});
if(dbool === true){
  $( "#buttond" ).click(function() {
    $( "#d" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>D</center></h3>`);
    dbool = false;
  }else if(abool === false){
    return null;
  }
});
if(ebool === true){
  $( "#buttone" ).click(function() {
    $( "#e" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>E</center></h3>`);
    ebool = false;
  }else if(abool === false){
    return null;
  }
});
if(fbool === true){
  $( "#buttonf" ).click(function() {
    $( "#f" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>F</center></h3>`);
    fbool = false;
  }else if(abool === false){
    return null;
  }
});
if(gbool === true){
  $( "#buttong" ).click(function() {
    $( "#g" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>G</center></h3>`);
    gbool = false;
  }else if(abool === false){
    return null;
  }
});
if(hbool === true){
  $( "#buttonh" ).click(function() {
    $( "#h" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>H</center></h3>`);
    hbool = false;
  }else if(abool === false){
    return null;
  }
});
if(ibool === true){
  $( "#buttoni" ).click(function() {
    $( "#i" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>I</center></h3>`);
    ibool = false;
  }else if(abool === false){
    return null;
  }
});
if(jbool === true){
  $( "#buttonj" ).click(function() {
    $( "#j" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>J</center></h3>`);
    jbool = false;
  }else if(abool === false){
    return null;
  }
});
if(kbool === true){
  $( "#buttonk" ).click(function() {
    $( "#k" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>K</center></h3>`);
    kbool = false;
  }else if(abool === false){
    return null;
  }
});
if(lbool === true){
  $( "#buttonl" ).click(function() {
    $( "#l" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>L</center></h3>`);
    lbool = false;
  }else if(abool === false){
    return null;
  }
});
if(mbool === true){
  $( "#buttonm" ).click(function() {
    $( "#m" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>M</center></h3>`);
    mbool = false;
  }else if(abool === false){
    return null;
  }
});
if(nbool === true){
  $( "#buttonn" ).click(function() {
    $( "#n" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>N</center></h3>`);
    nbool = false;
  }else if(abool === false){
    return null;
  }
});
if(obool === true){
  $( "#buttono" ).click(function() {
    $( "#o" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>O</center></h3>`);
    obool = false;
  }else if(abool === false){
    return null;
  }
});
if(pbool === true){
  $( "#buttonp" ).click(function() {
    $( "#p" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>P</center></h3>`);
    pbool = false;
  }else if(abool === false){
    return null;
  }
});
if(qbool === true){
  $( "#buttonq" ).click(function() {
    $( "#q" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>Q</center></h3>`);
    qbool = false;
  }else if(abool === false){
    return null;
  }
});
if(rbool === true){
  $( "#buttonr" ).click(function() {
    $( "#r" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>R</center></h3>`);
    rbool = false;
  }else if(abool === false){
    return null;
  }
});
if(sbool === true){
  $( "#buttons" ).click(function() {
    $( "#s" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>S</center></h3>`);
    sbool = false;
  }else if(abool === false){
    return null;
  }
});
if(tbool === true){
  $( "#buttont" ).click(function() {
    $( "#t" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>T</center></h3>`);
    tbool = false;
  }else if(abool === false){
    return null;
  }
});
if(ubool === true){
  $( "#buttonu" ).click(function() {
    $( "#u" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>U</center></h3>`);
    ubool = false;
  }else if(abool === false){
    return null;
  }
});
if(vbool === true){
  $( "#buttonv" ).click(function() {
    $( "#v" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>V</center></h3>`);
    vbool = false;
  }else if(abool === false){
    return null;
  }
});
if(wbool === true){
  $( "#buttonw" ).click(function() {
    $( "#w" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>W</center></h3>`);
    wbool = false;
  }else if(abool === false){
    return null;
  }
});
if(xbool === true){
  $( "#buttonx" ).click(function() {
    $( "#x" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>X</center></h3>`);
    xbool = false;
  }else if(abool === false){
    return null;
  }
});
if(ybool === true){
  $( "#buttony" ).click(function() {
    $( "#y" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>Y</center></h3>`);
    ybool = false;
  }else if(abool === false){
    return null;
  }
});
if(zbool === true){
  $( "#buttonz" ).click(function() {
    $( "#z" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>Z</center></h3>`);
    zbool = false;
  }else if(abool === false){
    return null;
  }
});



});
