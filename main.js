document.addEventListener('DOMContentLoaded',function() //Lê todo o documento HTML
{
    const questoes = document.querySelectorAll('[data-faq-questao]')//Guarda no Vetor questões
                                                                    //todas as divs perguntas 
                                                                    // -- Função 1 -- //

    const secaoHero = document.querySelector('.hero')// -- Função 2 -- //
    const alturaHero = secaoHero.clientHeight

    for(let i =0; i < questoes.length; i++ )// -- Função 1 -- //
    {
        questoes[i].addEventListener('click',abreFechaFaqs)
    }

    window.addEventListener('scroll',function()  // -- Função 2 -- //
    {
        const posiRolY = window.scrollY
        // console.log(window.scrollY)
        if(posiRolY > 0)
        {
            sumirMensagem() 
        }   
        else
        {
            aparecerMensagem()
        } 
    })
})

function abreFechaFaqs(elemento)// -- Função 1 -- //
{
    const classe = 'sinopse_questoes_item--aberto'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}

function sumirMensagem()// -- Função 2 -- //
{
    const mensagemVA = document.querySelector('.hero_abaixo')  
    mensagemVA.classList.add('sumir')
}

function aparecerMensagem()// -- Função 2 -- //
{
    const mensagemVA = document.querySelector('.hero_abaixo')  
    mensagemVA.classList.remove('sumir')
}