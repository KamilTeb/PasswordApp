// Pobrać inputa oraz diva
const input = document.querySelector('input');
const div = document.querySelector('div');
const password = "test";
const message = "Hasło poprawne!";

input.addEventListener('input', (e) => {
    if (password === e.target.value) {
        div.textContent = message;
        e.target.value = '';
    } else {
        div.textContent = '';
    }
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active')
})
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active')
})