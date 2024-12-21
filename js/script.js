document.getElementById('LoginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    usernameError.style.display = 'none';
    passwordError.style.display = 'none';

    // Validasi input
    let valid = true;
    if (username === '') {
        usernameError.style.display = 'block';
    }
    if (passowrd === '') {
        passwordError.style.display = 'block';
        valid = false;
    }

    // Jika valid
    if (valid) {
        alert('Form berhasil dikirim!')
    }
});