// Seleciona os cards de habilidades e os modais

const skillCards = document.querySelectorAll('.skill');
const modals = {
    programming: document.getElementById('programming-modal'),
    cybersecurity: document.getElementById('cybersecurity-modal'),
    networking: document.getElementById('networking-modal'),
    os: document.getElementById('os-modal')
};

// Adiciona event listeners para abrir os modais
document.getElementById('programming-card').addEventListener('click', () => {
    modals.programming.classList.add('show');
});

document.getElementById('cybersecurity-card').addEventListener('click', () => {
    modals.cybersecurity.classList.add('show');
});

document.getElementById('networking-card').addEventListener('click', () => {
    modals.networking.classList.add('show');
});

document.getElementById('os-card').addEventListener('click', () => {
    modals.os.classList.add('show');
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
});