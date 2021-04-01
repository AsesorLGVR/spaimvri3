function resultado() {
var p1, p2, p3, p4, p5, p6, nota;
var correcto = document.getElementById('correcto');

  
if (document.getElementById('estoy').selected==true) {p1=1}
if (p1==1) {document.getElementById('demo0').innerHTML="debato",document.getElementById('demo0').style.color = "#00FF00";}
else{p1=0, document.getElementById('demo0').innerHTML=":(",document.getElementById('demo0').style.color = "#EB0606";}


if (document.getElementById('estas').selected==true) {p2=1}
if (p2==1) {document.getElementById('demo1').innerHTML="debates",document.getElementById('demo1').style.color = "#00FF00";}
else{p2=0 , document.getElementById('demo1').innerHTML=":(",document.getElementById('demo1').style.color = "#EB0606";}
  


if (document.getElementById('esta').selected==true) {p3=1}
if (p3==1) {document.getElementById('demo2').innerHTML="debate",document.getElementById('demo2').style.color = "#00FF00";}
else{p3=0, document.getElementById('demo2').innerHTML=":(",document.getElementById('demo2').style.color = "#EB0606";}


if (document.getElementById('estamos').selected==true) {p4=1}
if (p4==1) {document.getElementById('demo3').innerHTML="debatimos",document.getElementById('demo3').style.color = "#00FF00";}
else{p4=0, document.getElementById('demo3').innerHTML=":(",document.getElementById('demo3').style.color = "#EB0606";}


if (document.getElementById('estais').selected==true) {p5=1}
if (p5==1) {document.getElementById('demo4').innerHTML="ís",document.getElementById('demo4').style.color = "#00FF00";}
else{p5=0, document.getElementById('demo4').innerHTML=":(",document.getElementById('demo4').style.color = "#EB0606";}


if (document.getElementById('estan').selected==true) {p6=1}
if (p6==1) {document.getElementById('demo5').innerHTML="debaten",document.getElementById('demo5').style.color = "#00FF00";}
else{p6=0, document.getElementById('demo5').innerHTML=":(",document.getElementById('demo5').style.color = "#EB0606";}

                         
nota=p1+p2+p3+p4+p5+p6;
document.getElementById('resultado').innerHTML="Resultado: "+nota+ " de 6"
if(document.getElementById('estoy').selected==true && document.getElementById('estas').selected==true && document.getElementById('esta').selected==true && document.getElementById('estamos').selected==true && document.getElementById('estais').selected==true && document.getElementById('estan').selected==true){correcto.play() && alert('Si te cansas, aprende a descansar, no a renunciar.')}
else{correcto.paused}



}


$(document).ready(function(){
      $('#reset').click(function(){
        location.reload();
        });
});