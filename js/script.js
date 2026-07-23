// Rolagem suave ao clicar nos links do menu

const links = document.querySelectorAll('nav a');

links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior:'smooth'
        });

    });

});

// Mensagem ao clicar no botão de orçamento

const botao = document.querySelector('.botao');

botao.addEventListener('click', () => {
    console.log("Solicitação de orçamento iniciada.");
});