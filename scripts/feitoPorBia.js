//CONFIGURAÇÕES 

//CABEÇALHO E RODAPÉ
var cabecalho = window.document.getElementsByTagName('header')
var rodape = window.document.getElementsByTagName('footer')


function config() {

    //CONFIGURA CABEÇALHO
    cabecalho[0].innerHTML=`
    <div id="dmenu">
        <span id="imenu"class="material-icons bt" onclick="abremenu()">menu</span>
    </div>
    <a class="dlogo" href="home.html">
            <img id="imglogo" src="images/logo.png" alt="Feito por Bia">
    </a>
    <div id="menu">
        <nav>
            <div id="bvolt">
                <span id="ivolt" class="material-icons bt" onclick="fechamenu()">menu_open</span>
            </div>
            <ul id="nave" >
                <li>
                    <div class="dnavegacao"><a class="anavegacao" href="home.html">.  Principal  .</a></div>
                    <div class="conteiner"></div>
                </li>
                <li>
                    <div class="dnavegacao" onclick="mmprodutos()">.  Produtos  .</div>


                    <!--COMEÇO MENU INTERNO-->
                    <div id="mprodutos" class="conteiner">
                        <a class="produto" href="produtos.html">Todos os Produtos</a>
                        <div class="produtos" onclick="mostrarbolos()">
                            Bolos 
                            <span id="esp1" style="transform: translateY(6px);" class="material-icons">
                                expand_more
                            </span>
                            <span id="ret1" style="transform: translateY(6px); display: none;" class="material-icons">
                                expand_less
                            </span>
                        </div>
                        <div id="bolos" class="produto">
                            <a class="produto" href="produtos.html?p=1">Todos os bolos</a>
                            <a class="produto" href="bolosFestivos.html">Bolos Festivos</a>
                            <a class="produto" href="bentoCake.html">Bento cake</a>
                            <a class="produto" href="boloDePote.html">Bolo de Pote</a>
                            <a class="produto" href="boloVulcao.html">Bolo Vulcão</a>
                            <a class="produto" href="boloFatia.html">Bolo em Fatia</a>
                        </div>
                        <a class="produto" href="docinhosTradicionais.html">Docinhos tradicionais</a>
                        <a class="produto" href="copoDaFelicidade.html">Copo da Felicidade</a>
                        <a class="produto" href="bombomAberto.html">Bombom Aberto</a>
                    </div>
                    <!--FIM MENU INTERNO-->
                </li>
                <li>
                    <div class="dnavegacao"><a class="anavegacao" href="sobre.html">.  Sobre  .</a></div>
                    <div class="conteiner"></div>
                </li>
                <li>
                    <div class="dnavegacao" onclick="mmcontato()">.  Contato  .</div>
                    <div id="mcontato" class="conteiner">
                        <a class="produto" href="https://api.whatsapp.com/send?phone=5531991415458&text=Oi,%20quero%20fazer%20uma%20encomenda" target="_blank">WhatsApp <img class="cttico" src="images/ha-icob.png" alt=""></a>
                        <a class="produto" href="https://www.instagram.com/feitoporbiia/" target="_blank">Instagram <img class="cttico" src="images/ig-icob.png" alt=""></a>
                    </div>
                </li>
            </ul>
        </nav>
    </div>`

    //CONFIGURA RODAPÉ
    rodape[0].innerHTML=`
    <div id="ctt">
        <div>
            <h2 id="ctt1"> Contato:</h2>
        </div>
        <div id="ctt2">
            <a class="contato" href="https://api.whatsapp.com/send?phone=5531991415458&text=Oi,%20quero%20fazer%20uma%20encomenda" target="_blank">WhatsApp <img class="cttico" src="images/ha-icob.png" alt=""></a>
            <a class="contato" href="https://www.instagram.com/feitoporbiia/" target="_blank">Instagram <img class="cttico" src="images/ig-icob.png" alt=""></a>
        </div>
    </div>
    <div style="width: 100%; display: flex; justify-content: center; margin-top: 15px;">
        <a href="home.html">
            <div id="logo"></div>
        </a>
    </div>
    `
}

//MENU
function abremenu(){
    menu.style.marginLeft = 0
}
function fechamenu(){
    menu.style.marginLeft = '-100vw'
    mprodutos.style.display = 'none'
    mcontato.style.display = 'none'
    bolos.style.display= 'none'
    esp1.style.display = 'inline-block'
    ret1.style.display = 'none'
}
function mmprodutos(){
    if(mprodutos.style.display == 'none'){
        mprodutos.style.display = 'block'
        mcontato.style.display = 'none'
    }else{
        mprodutos.style.display = 'none'
        bolos.style.display= 'none'
        esp1.style.display = 'inline-block'
        ret1.style.display = 'none'
    }
}
function mmcontato(){
    if(mcontato.style.display == 'none'){
        mcontato.style.display = 'block'
        mprodutos.style.display = 'none'
    }else{
        mcontato.style.display = 'none'
    }
}
function mostrarbolos(){
    var bolos = window.document.getElementById('bolos')
    if(bolos.style.display == 'none'){
        bolos.style.display = 'block'
        esp1.style.display = 'none'
        ret1.style.display = 'inline-block'
    }else{
        bolos.style.display= 'none'
        esp1.style.display = 'inline-block'
        ret1.style.display = 'none'
    }
}

//PASSAGEM DE FOTOS
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
