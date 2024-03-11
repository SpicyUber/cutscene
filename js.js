function hideThat(){
    var davideo= document.getElementById("myvideo");
    var dasource= document.getElementById("masource");
    var button= document.getElementById("mybutton");
   
    button.innerHTML='<i class="fa fa-play"></i>';}
function hideThatS(){
   var davideo= document.getElementById("myvideo");
   var dasource= document.getElementById("masource");
   var button= document.getElementById("mybutton");
   if(davideo.paused){davideo.play();fadeOutEffect();}
}
function fadeOutEffect(){
    var fadeTarget = document.getElementById("mybutton");
        var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.04;
            } else {
                clearInterval(fadeEffect);
            }
        }, 10);
    
}
