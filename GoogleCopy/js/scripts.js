// script.js

document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.form-control');

    input.addEventListener('keypress', function(event) {
        // Verifica se a tecla pressionada é a tecla Enter (código 13)
        if (event.key === 'Enter') {
            event.preventDefault(); // Impede a ação padrão do navegador
            // Aqui você pode adicionar lógica adicional, se necessário
        }
    });
});
