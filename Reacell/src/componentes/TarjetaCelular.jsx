function TarjetaCelular({

    celular,
    
    seleccionar,
    
    agregarCarrito
    
    }){
    
    
    return(
    
    
    <div className="tarjeta">
    
    
    
    <div className="galeria-card">
    
    
    <img
    
    src={celular.imagenFrontal}
    
    className="foto-celular"
    
    />
    
    
    
    <img
    
    src={celular.imagenTrasera}
    
    className="foto-celular"
    
    />
    
    
    </div>
    
    
    
    
    
    <h3>
    
    {celular.nombre}
    
    </h3>
    
    
    
    
    
    <p>
    
    Modelo: {celular.modelo}
    
    </p>
    
    
    
    
    <p>
    
    Estado: {celular.estado}
    
    </p>
    
    
    
    
    <p>
    
    RAM: {celular.ram}
    
    </p>
    
    
    
    
    <p>
    
    Almacenamiento: {celular.almacenamiento}
    
    </p>
    
    
    
    
    
    <h2>
    
    ${celular.precio.toLocaleString("es-CL")}
    
    </h2>
    
    
    
    
    
    <div className="botones">
    
    
    
    
    
    <button
    
    className="detalle"
    
    onClick={()=>{
    
    if(seleccionar){
    
    seleccionar(celular)
    
    }
    
    }}
    
    >
    
    Detalles
    
    </button>
    
    
    
    
    
    
    
    <button
    
    className="añadiralcarrito"
    
    onClick={()=>{
    
    if(agregarCarrito){
    
    agregarCarrito(celular)
    
    }
    
    }}
    
    >
    
    Añadir al carrito
    
    </button>
    
    
    
    
    </div>
    
    
    
    
    
    </div>
    
    
    )
    
    
    }
    
    
    
    export default TarjetaCelular