//Fotos
var foto1 = window.document.getElementsByClassName('slide')
var margin = 0
function aft(){
    if (margin == (foto1.length * -100) + 100){
        margin = 0
    }else{
        margin -= 100
    }
    foto1[0].style.marginLeft = `${margin}%`
}
function vft(){
    if (margin == 0){
        margin = (foto1.length * -100) + 100
    }else{
        margin += 100
    }
    foto1[0].style.marginLeft = `${margin}%`
}
