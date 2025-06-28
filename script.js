document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Inicio de sesión Nothing Style - Formulario enviado!');
            // Aquí iría la lógica real de validación y envío de datos
            console.log('Usuario:', document.getElementById('username').value);
            console.log('Contraseña:', document.getElementById('password').value);
        });
    }
});


