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
  $( "#buttonc" ).click(function() {
    if(cbool === true){
    $( "#c" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>C</center></h3>`);
    cbool = false;
  }else if(cbool === false){
    return null;
  }
});
  $( "#buttond" ).click(function() {
    if(dbool === true){
    $( "#d" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>D</center></h3>`);
    dbool = false;
  }else if(dbool === false){
    return null;
  }
});
  $( "#buttone" ).click(function() {
    if(ebool === true){
    $( "#e" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>E</center></h3>`);
    ebool = false;
  }else if(ebool === false){
    return null;
  }
});
  $( "#buttonf" ).click(function() {
    if(fbool === true){
    $( "#f" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>F</center></h3>`);
    fbool = false;
  }else if(fbool === false){
    return null;
  }
});
  $( "#buttong" ).click(function() {
    if(gbool === true){
    $( "#g" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>G</center></h3>`);
    gbool = false;
  }else if(gbool === false){
    return null;
  }
});
  $( "#buttonh" ).click(function() {
    if(hbool === true){
    $( "#h" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>H</center></h3>`);
    hbool = false;
  }else if(hbool === false){
    return null;
  }
});
  $( "#buttoni" ).click(function() {
    if(ibool === true){
    $( "#i" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>I</center></h3>`);
    ibool = false;
  }else if(ibool === false){
    return null;
  }
});
  $( "#buttonj" ).click(function() {
    if(jbool === true){
    $( "#j" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>J</center></h3>`);
    jbool = false;
  }else if(jbool === false){
    return null;
  }
});
  $( "#buttonk" ).click(function() {
    if(kbool === true){
    $( "#k" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>K</center></h3>`);
    kbool = false;
  }else if(kbool === false){
    return null;
  }
});
  $( "#buttonl" ).click(function() {
    if(lbool === true){
    $( "#l" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>L</center></h3>`);
    lbool = false;
  }else if(lbool === false){
    return null;
  }
});
  $( "#buttonm" ).click(function() {
    if(mbool === true){
    $( "#m" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>M</center></h3>`);
    mbool = false;
  }else if(mbool === false){
    return null;
  }
});
  $( "#buttonn" ).click(function() {
    if(nbool === true){
    $( "#n" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>N</center></h3>`);
    nbool = false;
  }else if(nbool === false){
    return null;
  }
});
  $( "#buttono" ).click(function() {
    if(obool === true){
    $( "#o" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>O</center></h3>`);
    obool = false;
  }else if(obool === false){
    return null;
  }
});
  $( "#buttonp" ).click(function() {
    if(pbool === true){
    $( "#p" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>P</center></h3>`);
    pbool = false;
  }else if(pbool === false){
    return null;
  }
});
  $( "#buttonq" ).click(function() {
    if(qbool === true){
    $( "#q" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>Q</center></h3>`);
    qbool = false;
  }else if(qbool === false){
    return null;
  }
});
  $( "#buttonr" ).click(function() {
    if(rbool === true){
    $( "#r" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>R</center></h3>`);
    rbool = false;
  }else if(rbool === false){
    return null;
  }
});
  $( "#buttons" ).click(function() {
    if(sbool === true){
    $( "#s" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>S</center></h3>`);
    sbool = false;
  }else if(sbool === false){
    return null;
  }
});
  $( "#buttont" ).click(function() {
    if(tbool === true){
    $( "#t" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>T</center></h3>`);
    tbool = false;
  }else if(tbool === false){
    return null;
  }
});
  $( "#buttonu" ).click(function() {
    if(ubool === true){
    $( "#u" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>U</center></h3>`);
    ubool = false;
  }else if(ubool === false){
    return null;
  }
});
  $( "#buttonv" ).click(function() {
    if(vbool === true){
    $( "#v" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>V</center></h3>`);
    vbool = false;
  }else if(vbool === false){
    return null;
  }
});
  $( "#buttonw" ).click(function() {
    if(wbool === true){
    $( "#w" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>W</center></h3>`);
    wbool = false;
  }else if(wbool === false){
    return null;
  }
});
  $( "#buttonx" ).click(function() {
    if(xbool === true){
    $( "#x" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>X</center></h3>`);
    xbool = false;
  }else if(xbool === false){
    return null;
  }
});
  $( "#buttony" ).click(function() {
    if(ybool === true){
    $( "#y" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>Y</center></h3>`);
    ybool = false;
  }else if(ybool === false){
    return null;
  }
});
  $( "#buttonz" ).click(function() {
    if(zbool === true){
    $( "#z" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>Z</center></h3>`);
    zbool = false;
  }else if(zbool === false){
    return null;
  }
});



});
