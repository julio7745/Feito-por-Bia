var slide = window.document.getElementsByClassName('slide')
var margin = 0

setInterval(mudafoto, 4000)

function mudafoto(){
    
    if (margin == -(slide.length -1)){
        margin = 0
    }else{
        margin -= 1
    }
    slide[0].style.marginLeft = `${margin * (slide[0].clientWidth)}px`
}
