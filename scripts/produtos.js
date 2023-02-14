//PRODUTOS --> PAGINA PRODUTOS
function load(){

    var param = new URLSearchParams(window.location.search).get('p')
    var produto = window.document.getElementsByClassName('container')
    var bolo = window.document.getElementsByClassName('bolo')
    var docinho = window.document.getElementsByClassName('docinho')
    
    switch (param) {
        case '1':
            for(let aux in produto){
                produto[aux].style.display='none'
            }
            for(let aux in bolo){
                bolo[aux].style.display='inline-block'
            }
            break;
    }
}
