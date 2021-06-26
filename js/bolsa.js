class Carrito{

    //seleccionar producto
    obtenerProducto(e){
        if(e.target.classList.contains('card')){
            const producto = e.target;
            this.guardarDatosProducto(producto);
        }
    }

    //guardar datos de producto seleccionado
    guardarDatosProducto(producto){
        const datos = {
            id: 1,
            descripcion: producto.querySelector('.descrip-product').textContent,
            precio: producto.querySelector('.price-product').textContent,
            imagen: producto.querySelector('.img-product img').src,
            cantidad: 3
        }
        this.insertarProducto(datos);
    }


    insertarProducto(datos){
        const etiqueta = document.createElement('div');
        etiqueta.innerHTML = `
        <div class="popup">
            <div class="iz">
                <div class="ret">
                    <a href="#" class="bnt_regresar" > Regresar</a>
                </div>
                <div class="photo_comida">
                    <h2 class="titulo">${datos.descripcion}</h2>
                    <img class="food_img" src="${datos.imagen}"/>
                </div>                    
            </div>
            <div class="der">
                <div class="primer">
                    <p class="precio">$<span>${datos.precio}</span></p>
                    <div class="cant">
                        <p>Cantidad: </p>
                        <button class="btn_can" >-</button>
                        <input type="text" class="num_can" value="${datos.cantidad}">
                        <button class="btn_can">+</button>
                    </div>
                </div>
                <div class="des">
                    <h3>Descripcion:</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, velit beatae error adipisci omnis minima? Minima debitis quos modi! Cumque ad aliquid dolor fuga nesciunt obcaecati eos, quis perspiciatis tempora? </p>
                </div>
                <div class="adicional">
                    <h3>Agrege una información adicional o complementos de su pedido:</h3>
                    <input type="text" class="input-adicional">
                </div>
                
                <div class="pedir">
                    <a href="#" class="bnt_añadir"> Añadir a la Bolsa</a>
                </div>
            </div>
        </div>
        `;
        ventanaAdd.appendChild(etiqueta);
    }



    // GUARDAR DATOS EN LA LOCAL STORAGE CUANDO ACEPTEMOS GUARDAR AL CARRITO
    obtenerDatosFinales(datosProduct){
        if(datosProduct.target.classList.contains('popup')){
            const detalleProducto = datosProduct.target.parentElement;
            this.guardarDatosLS(detalleProducto);
        }
    }

    obtenerDatosLS(){
        let productoLS;

        if(localStorage.getItem('productos')===null){
            productoLS = [];
        }else{
            productoLS=JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    //guardar datos del producto a la Base de datos del usuario
    guardarDatosLS(detalle){
        let producto;

        const datos = {
            id: 1,
            imagen: detalle.querySelector('.photo_comida .food_img'),
            nombre: detalle.querySelector('.photo_comida .titulo'),
            inf_adicional: detalle.querySelector('.adicional .input-adicional'),
            precio: detalle.querySelector('.precio'),
            cantidad: detalle.querySelector('.num_can')
        }

        producto=this.obtenerDatosLS();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
        this.insertarDatosLS(datos);
    }


    
    insertarDatosLS(producto){

    }
}