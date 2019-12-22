console.log('Bienvenido');

const boton = window.document.querySelector('#boton');
boton.addEventListener('click', iniciarSesion);

function iniciarSesion() {
    const input1 = window.document.querySelector('#email');
    const email1 = input1.value;
    const input2 = window.document.querySelector('#password');
    const password2 = input2.value;

    if (email1 === 'ejemplo@gmail.com' && password2 === '123456') {

        console.log('Iniciando Sesion');
        console.log('Espere Porfavor...');

    } else {

        console.log('Email o Contraseña incorrectos');
        console.log('Intentelo denuevo porfavor');

    }

}