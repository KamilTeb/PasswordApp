// Pobrać inputa oraz diva
const input = document.querySelector('input');
const div = document.querySelector('div');
const passwords = ['test', 'witam', 'Ania'];
const messages = ['Hasło jest poprawne!', 'Witam użytkowniku...', 'Cześć Ania!'];

input.addEventListener('input', (e) => {
    div.textContent = '';
    const text = e.target.value;

    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = ''
        }
    })
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active')
})
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active')
})