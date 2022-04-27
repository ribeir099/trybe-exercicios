const butaoEnviar = document.getElementById('sendButton');

function naoEnviar(event) {
    event.preventDefault();
}

butaoEnviar.addEventListener('click', naoEnviar);