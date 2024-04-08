const inputs = document.querySelectorAll('input[type="number"]');

function salvarValores() {
    inputs.forEach((input) => {
        localStorage.setItem(input.id, input.value);
    });
}

inputs.forEach((input) => {
    input.addEventListener('change', salvarValores);
});

window.addEventListener('load', () => {
    inputs.forEach((input) => {
        const valorSalvo = localStorage.getItem(input.id);
        if (valorSalvo) {
            input.value = valorSalvo;
        }
    });
});