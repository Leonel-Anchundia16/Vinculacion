const formulario =document.getElementById('formulario');
nombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
	//Eliminamos los numeros
    nombre.value = valorInput.replace(/[0-9]/g, '')
	nombre.textContent = valorInput;
});
apellido.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
	 //Eliminamos los numeros
     apellido.value = valorInput.replace(/[0-9]/g, '');
	apellido.textContent = valorInput;
});
telefono.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    telefono.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
    //Elimina simbolos
    .replace(/\W/g,'')
	// Eliminar las letras
	.replace(/\D/g, '');
} );
//contraseñas iguales
function validarformulario(){
    if(contraseña.value != contraseña2.value){
        document.getElementById("alerta").innerHTML='<span class="mnj-error" id="alerta"><i class="fas fa-exclamation-circle"></i> <span>Las contraseñas no coinciden</span></span>'
         contraseña.value="";
         contraseña2.value="";
         return false;
    } 
    else{
        document.getElementById("alerta").innerHTML="";
    }
}