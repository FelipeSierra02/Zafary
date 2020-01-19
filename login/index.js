console.log(' Bienvenido ')

const boton = window.document.querySelector('#btnLogin');
boton.addEventListener('click', mostrarDatos);

function mostrarDatos() {
    const opt1 = window.document.querySelector('#InpUsername');
    const opt2 = window.document.querySelector('#InpPassword');

    const Value1 = opt1.value;
    const Value2 = opt2.value;

    opt1.value = '';
    opt2.value = "";
    opt1.focus();

    
    if (Value1 === '' || Value2 === '') {
        console.log('Ingrese Datos');
    } else {
        if (Value1 === 'ejemplo@gmail.com' && Value2 === '123456') {
            console.log('Accediendo, porfavor espere...');
            document.getElementById("msgerror").innerHTML = " ";  
        }else{
            console.log( 'Permiso denegado- Intentelo nuevamente ');
            document.getElementById("msgerror").innerHTML = " Usuario y/o Contraseña incorrecta ";
        }
    }
}