class Carrito{
<<<<<<< HEAD
    obtenerProducto(e){
        if(e.target.classList.contains('card')){
          //  console.log(e)
          const producto = e.target;
          this.guardarDatosProducto(producto);
        }

    }

    //guardar datos del producto
=======

    //seleccionar producto
    obtenerProducto(e){
        if(e.target.classList.contains('btn-agregar')){
            const producto = e.target.parentElement.parentElement;
            this.guardarDatosProducto(producto);
        }
    }

    //guardar datos de producto seleccionado
>>>>>>> f8c17efbd94ff2564c0a0ed0ca1c442cd0a413b1
    guardarDatosProducto(producto){
        const datos = {
            id: 1,
            descripcion: producto.querySelector('.descrip-product').textContent,
<<<<<<< HEAD
            precio: producto.querySelector('.price_product').textContent,
            imagen:producto.querySelector('.img-product img').src,
=======
            precio: producto.querySelector('.price-product').textContent,
            imagen: producto.querySelector('.img-product img').src,
>>>>>>> f8c17efbd94ff2564c0a0ed0ca1c442cd0a413b1
            cantidad: 1
        }
        this.insertarProducto(datos);
    }

<<<<<<< HEAD
    insertarProducto(datos){
        const etiqueta = document.createElement('div');
        etiqueta.innerHTML = `
        <div   class="popup">
            <div class="iz">
                <div class="ret">
                    <a href="#" class="bnt_regresar" > Regresar</a>
                </div>
                <div class="photo_comida">
                    <h2 class="titulo"> ${datos.descripcion} </h2>     
=======

    insertarProducto(datos){
        const etiqueta = document.createElement('div');
        etiqueta.classList.add('popup');
        etiqueta.innerHTML = `
            <div class="iz">
                <div class="ret">
                    <a href="#" class="btn_regresar" ><i class="fas fa-chevron-left"></i>Regresar</a>
                </div>
                <div class="photo_comida">
                    <h2 class="titulo">${datos.descripcion}</h2>
>>>>>>> f8c17efbd94ff2564c0a0ed0ca1c442cd0a413b1
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
<<<<<<< HEAD
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
=======
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, velit beatae error adipisci omnis minima? Minima debitis quos modi! Cumque ad aliquid dolor fuga nesciunt obcaecati eos, quis perspiciatis tempora?</p>
                </div>
                <div class="adicional">
                    <h3>Agrege una información adicional o complementos a su pedido:</h3>
                    <textarea name="complemento" class="input-adicional" rows="1" placeholder="Ejemplo: Porción de Papas"></textarea>
                </div>
                <button id="btnAddCar" class="btn_añadir"> Añadir a la Bolsa</button>
            </div>
>>>>>>> f8c17efbd94ff2564c0a0ed0ca1c442cd0a413b1
        `;
        ventanaAdd.appendChild(etiqueta);
    }


<<<<<<< HEAD
    // guardar en localstore
    obtenerDatosFinales(datosProduct){
        if(datosProduct.target.classList.contains('popup')){
            const detalleProduct= datosProduct.target.parentElement;
            this.guardarDatosLS(detalleProduct);
        }

    }

    //guardar datos del producto en la bd del usuario
    guardarDatosLS(detalle){
        const datos={
            id: 1,
            imagen: detalle.querySelector('.photo_comida .food_img'),
            nombre: detalle.querySelector('.photo_comida .titulo'),
            inf_adicional: detalle.querySelector('.adicional .input-adicional'),
            precio: detalle.querySelector('.precio'),
            cantidad: detalle.querySelector('.num_can')
        }
        this.insertarDatosLS(datos);
    }

    insertarDatosLS(producto){

=======

    // GUARDAR DATOS EN LA LOCAL STORAGE CUANDO ACEPTEMOS GUARDAR AL CARRITO
    obtenerDatosFinales(datosProduct){
        if(datosProduct.target.classList.contains('btn_añadir')){
            const detalleProducto = datosProduct.target.parentElement.parentElement;
            this.guardarDatosLS(detalleProducto);
        }
    }

    obtenerDatosLS(){
        let bolsaLS;

        if(localStorage.getItem('bolsa')===null){
            bolsaLS = [];
        }else{
            bolsaLS=JSON.parse(localStorage.getItem('bolsa'));
        }
        return bolsaLS;
    }

    //guardar datos del producto a la Base de datos del usuario
    guardarDatosLS(detalle){
        let producto;

        const datos = {
            id: 1,
            imagen: detalle.querySelector('.photo_comida .food_img').src,
            nombre: detalle.querySelector('.photo_comida .titulo').textContent,
            inf_adicional: detalle.querySelector('.adicional .input-adicional').value,
            precio: detalle.querySelector('.precio').textContent,
            cantidad: detalle.querySelector('.num_can').value
        }

        producto=this.obtenerDatosLS();
        producto.push(datos);
        localStorage.setItem('bolsa', JSON.stringify(producto));
        // this.insertarDatosLS(datos);
    }


    
    insertarDatosLS(producto){
        
>>>>>>> f8c17efbd94ff2564c0a0ed0ca1c442cd0a413b1
    }
}