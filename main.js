// Pobrać inputa oraz diva
const input = document.querySelector('input');
const div = document.querySelector('div');
const passwords = ['JedEN', 'DwA'];
const messages = ['super', 'działa!'];

passwords.forEach((password, index) => {
    passwords[index] = password.toLowerCase();
    console.log(passwords[index]);
})

const showMessage = (e) => {
    div.textContent = ''
    const input = e.target.value.toLowerCase();
    passwords.forEach((password, i) => {
        if (password === input) {
            div.textContent = messages[i];
            e.target.value = '';
        }
    })
}

input.addEventListener('input', showMessage);

input.addEventListener('focus', (e) => {
    e.target.classList.add('active')
})
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active')
})