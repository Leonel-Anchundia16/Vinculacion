const btnMenu = document.getElementById('boxMenu-Select');
const mostrarCategorias = document.querySelector('.menu-container');
let estadoFuera = false;

btnMenu.addEventListener('mouseover', (boton)=>{
    boton.preventDefault();
    if(!btnMenu.classList.contains('down')){
        btnMenu.classList.add('down', 'active');
        mostrarCategorias.classList.add('active');  
        estadoFuera = false;  
    };
    
    // mostrarCategorias.addEventListener('mouseleave', ()=>{
    //     // let estado = false;
    //     setTimeout(()=>{
    //         estadoFuera = true;
    //         console.log('chao');
    //         mostrarCategorias.addEventListener('mouseover', ()=>{
    //             estadoFuera = false;
    //             console.log('cancelado');
    //         });
    //     },1000);
    // });
})





// if(estadoFuera == true){
//     btnMenu.classList.remove('down', 'active');
//     mostrarCategorias.classList.remove('active');
// }




const carrousel = document.getElementById('catMenuDesp');
const categoriaSize = document.querySelector('#catMenuDesp .item-categoria');
const botonAntes = document.getElementById('btnPrevious');
const botonSiguiente = document.getElementById('btnNext');


botonSiguiente.addEventListener('click', ()=>{
    carrousel.scrollLeft += categoriaSize.offsetWidth; 
});
botonAntes.addEventListener('click', ()=>{
    carrousel.scrollLeft -= categoriaSize.offsetWidth; 
});
    