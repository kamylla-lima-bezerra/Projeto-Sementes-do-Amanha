// Função para carregar o menu
function carregarMenu() {
    fetch('MENU/menu.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o menu');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro:', error);
            document.getElementById('menu-container').innerHTML = 
                '<p style="color: red;">Erro ao carregar o menu</p>';
        });
}

// Executar quando a página carregar
window.addEventListener('DOMContentLoaded', function() {
    carregarMenu();
    
    // Outras funções podem ser adicionadas aqui
    console.log('Página carregada com sucesso!');
});

// Exemplo de função adicional
function scrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute('href'));
            if (destino) {
                destino.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Chamar a função de scroll suave após carregar o menu
setTimeout(scrollSuave, 500);