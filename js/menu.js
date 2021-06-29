const btnMenuClick = document.querySelector('.btn-menu_nav');       //boton de menu cuando este en tamaño movil

function ventRegister(e){
    const ventana = document.getElementById("registrarme");
    
    if(ventana.classList.contains('active')){
        ventana.classList.remove('active');
    }else{
        ventana.classList.add('active');
    }
};

btnMenuClick.addEventListener('click', ()=>{
    const accionMenu = document.querySelector('.container-items-nav');

    if(btnMenuClick.classList.contains('active')){
        btnMenuClick.classList.remove('active');
        accionMenu.classList.remove('active');

    }else{
        btnMenuClick.classList.add('active');
        accionMenu.classList.add('active');
    }
})



