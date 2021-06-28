const bolsa = new Carrito();
const productos = document.getElementById('grid-product');
const ventanaAdd = document.getElementById('ventanaDetalle');

<<<<<<< HEAD


cargarEventos();
function cargarEventos(){
    productos.addEventListener('click', (e)=>(bolsa.obtenerProducto(e)));
    ventanaAdd.addEventListener('click', (e)=>(bolsa.obtenerDatosFinales(e)));

=======
cargarEventos();
function cargarEventos(){
    productos.addEventListener('click', (e)=>{bolsa.obtenerProducto(e)});

    ventanaAdd.addEventListener('click', (e) => {bolsa.obtenerDatosFinales(e)});
>>>>>>> f8c17efbd94ff2564c0a0ed0ca1c442cd0a413b1
}