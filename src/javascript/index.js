const btnMenu = document.querySelector('#hamburguer-button')
const menu = document.querySelector('#menu')
btnMenu.classList.add('hamburguer-button-js-enabled')

function closeMenu (){
    btnMenu.setAttribute('aria-expanded', 'false')
    menu.setAttribute('aria-hidden', 'true')
    menu.classList.add('menu-closed')
}

closeMenu()

btnMenu.addEventListener('click', function() {
    let expanded = this.getAttribute('aria-expanded') === 'true' ? true : false
    //true = menu aberto - false = menu fechado
    //com js, vamos deixar o atributo false

    document.removeEventListener('click', closeMenu)
    if(expanded){ //se o menu está aberto
        menu.classList.add('menu-closed') //fecha o menu
    }else{ //se o menu está fechado - aria-expanded: false;
        menu.classList.remove('menu-closed') //abrir o menu
    }
    this.setAttribute('aria-expanded', !expanded)
    menu.setAttribute('aria-hidden', expanded)
    //atualiza a propriedade do atributo, de acordo com o resultado do if
    setTimeout(function(){
        if(!expanded){
            document.addEventListener('click', closeMenu)
        }
    },1)
})

const mediaQuery = window.matchMedia('(min-width: 768px)')

function handleMediaQueryChange(e){
    if(e.matches){ //fora da media query
        btnMenu.setAttribute('aria-expanded', 'true')
        menu.setAttribute('aria-hidden', 'false')
        menu.classList.remove('menu-closed')
    } else{ //dentro da media query
        closeMenu()
    }
}

mediaQuery.addEventListener('change', handleMediaQueryChange) 

handleMediaQueryChange(mediaQuery) //fazer a verificação de início