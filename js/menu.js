const btnMenuClick = document.querySelector('.btn-menu_nav');


function ventRegister(){
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
