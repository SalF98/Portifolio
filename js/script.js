document.addEventListener('DOMContentLoaded', function() {

    const botaoHamburguer = document.getElementById('botao-hamburguer');
    const menuPrincipal = document.getElementById('menu-principal');
    const linksDoMenu = document.querySelectorAll('.link-menu'); 

    //fecha e abre o menu clicando no botão
    botaoHamburguer.addEventListener('click', function() {
        menuPrincipal.classList.toggle('ativo');
    });

    //o menu é fechado quando uma opção é selecionada
    linksDoMenu.forEach(function(link) {
        link.addEventListener('click', function() {
            menuPrincipal.classList.remove('ativo');
        });
    });

    const form = document.getElementById('formulario-contato');
    
    //valida os dados quando o usuário envia o formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const campoNome = document.getElementById('nome');
        const campoEmail = document.getElementById('email');
        const campoMensagem = document.getElementById('mensagem');
        let formularioValido = true;

        limparErro(campoNome);
        limparErro(campoEmail);
        limparErro(campoMensagem);

        if (campoNome.value.trim() === '') {
            mostrarErro(campoNome, 'O campo nome é obrigatório.');
            formularioValido = false;
        }

        if (campoEmail.value.trim() === '') {
            mostrarErro(campoEmail, 'O campo email é obrigatório.');
            formularioValido = false;
        }

        if (campoMensagem.value.trim() === '') {
            mostrarErro(campoMensagem, 'O campo mensagem é obrigatório.');
            formularioValido = false;
        }

        if (formularioValido) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        }
    });

    //função para exibir mensagem de erro do formulário
    function mostrarErro(campo, mensagem) {
        const spanErro = campo.nextElementSibling;
        spanErro.textContent = mensagem;
    }

    //fução para limpar mensagens de erro do formulário
    function limparErro(campo) {
        const spanErro = campo.nextElementSibling;
        spanErro.textContent = '';
    }
});