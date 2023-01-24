//setTimeout(mudafoto, 2000);

var slide = window.document.getElementsByClassName('slide')
var margin = 0 

function mudafoto(){
    
   if (margin == ((slide.length * (-slide[0].clientWidth)) + (slide[0].clientWidth))){
        margin = 0
    }else{
        margin -= slide[0].clientWidth
    }
    slide[0].style.marginLeft = `${margin}px`
}

setInterval(mudafoto, 4000);