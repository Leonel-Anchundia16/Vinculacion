const inputsRegister = document.querySelectorAll('#registrarme form input');
const formulario = document.getElementById('formulario');
let passwordF = '';

const expresionesRegulares = {
    solotext : /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
    fecha: /([0-9]){0,2}[/]([0-9]){0,2}[/]([0-9]){4}/g,
    correo : /[a-z\d]+[@]+[a-z]+\.[a-z]{2,}/,
    numeros : /[0-9]{10}/,   
    contraseña: /([0-9\d\w\Sa-zA-Z]{4,16})/,
    espacios : /\s/g
}


inputsRegister.forEach(input =>{
    input.addEventListener('keyup', (e) =>{
        let valorCampo = e.target.value;

        switch(e.target.name){
            case 'firstPass':
                input.value = valorCampo.replace(expresionesRegulares.espacios, '');
            break;
            case 'secondPass':
                input.value = valorCampo.replace(expresionesRegulares.espacios, '');
                verificarContraseña();
            break;
        }
    });
    input.addEventListener('blur', (dato)=>{
        let valueCampo = dato.target.value;
        
        switch(dato.target.name){
            case 'name':
                if(expresionesRegulares.solotext.test(dato.target.value)){
                    mostrarAlert(true, 'firstName');
                }else{
                    mostrarAlert(false, 'firstName', 'Este campo no debe contener números ni caracteres especiales');
                }
            break;
            case 'apellido':
                if(expresionesRegulares.solotext.test(dato.target.value)){
                    mostrarAlert(true, 'lastName');
                }else{
                    mostrarAlert(false, 'lastName', 'Este campo no debe contener números ni caracteres especiales');
                }
            break;
            case 'dateNac':
                let fecha = new Date(valueCampo);
                let añoActual = new Date().getFullYear();

                if(isNaN(fecha.getDay()) || isNaN(fecha.getMonth()) || isNaN(fecha.getFullYear()) ){
                    mostrarAlert(false, 'dateNacm', 'Fecha de Nacimiento es un campo requerido');
                }else if(fecha.getFullYear() > (añoActual-12)){
                    mostrarAlert(false, 'dateNacm', 'Tu fecha de Nacimiento nos indica que no eres mayor de edad, lo sentimos');
                }else{
                    mostrarAlert(true, 'dateNacm');
                }
            break;
            case 'email-user':
                if(expresionesRegulares.correo.test(valueCampo)){
                    mostrarAlert(true, 'email');
                }else{
                    console.log(valueCampo)
                    mostrarAlert(false, 'email', 'El correo que ingresaste no es válido');
                }
            break;
            case 'telef':
                if(expresionesRegulares.numeros.test(valueCampo)){
                    mostrarAlert(true, `telephone`);
                }else{
                    mostrarAlert(false, `telephone`, 'El nuúmero de telefono no es correcto');
                }
            break;
            case 'firstPass':
                if(expresionesRegulares.contraseña.test(valueCampo)){
                    mostrarAlert(true, 'password1');
                }else{
                    mostrarAlert(false, 'password1', 'Su contraseña debe tener al menos 4 y máximo 16 caracteres ');
                }
                verificarContraseña();
            break;            
        }
    })
})

const mostrarAlert = (respuesta, campo, mensaje)=>{
    const campoInput = document.querySelector(`.alert-${campo}`);
    if(respuesta == false){
        campoInput.classList.add('active');
        campoInput.innerHTML = `<i class="fas fa-exclamation-circle"></i> <span>${mensaje}</span>`;
    }else{
        campoInput.classList.remove('active');
    }
}

function verificarContraseña(){
    const contraseña1 = document.querySelector('.pass1');
    const contraseña2 = document.querySelector('.pass2');
    
    if(contraseña2.value !== ''){
        if(contraseña1.value === contraseña2.value){
            mostrarAlert(true, 'password2');
        }else{
            mostrarAlert(false, 'password2', 'Las contraseñas no coinciden');
        }
    }
}
  