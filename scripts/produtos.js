//PRODUTOS --> PAGINA PRODUTOS
function load(){

    let param = new URLSearchParams(window.location.search).get('p')
    let produto = window.document.getElementsByClassName('container')
    let bolo = window.document.getElementsByClassName('bolo')
    
    switch (param) {
        case '1':
            for(let aux = 0; aux < produto.length; aux++){
                produto[aux].style.display='none'
            }
            for(let aux = 0; aux < bolo.length; aux++){
                bolo[aux].style.display='inline-block'
            }
            break;
    }
}
