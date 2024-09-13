const modals = {
    programming: document.getElementById('programming-modal'),
    cybersecurity: document.getElementById('cybersecurity-modal'),
    networking: document.getElementById('networking-modal'),
    os: document.getElementById('os-modal')
};

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

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        Object.values(modals).forEach(modal => {
            modal.classList.remove('show');
        });
    }
});