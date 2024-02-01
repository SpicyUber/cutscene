function hideThat(){
    var davideo= document.getElementById("myvideo");
    var dasource= document.getElementById("masource");
    var button= document.getElementById("mybutton");
    if(davideo.paused){button.innerHTML='<i class="fa fa-play"></i>';}
    else{ button.innerHTML='<i class="fa fa-pause"></i>';}}
function hideThatS(){
   var davideo= document.getElementById("myvideo");
   var dasource= document.getElementById("masource");
   var button= document.getElementById("mybutton");
   if(davideo.paused){davideo.play();}
   else{ davideo.pause();}
}