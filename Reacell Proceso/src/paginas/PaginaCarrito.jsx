import BarraNavegacion from "../componentes/BarraNavegacion"


function PaginaCarrito({

carrito,

setCarrito,

volverInicio,

busqueda,

setBusqueda,

setMostrarCarrito,

cantidadCarrito

}){


function eliminarProducto(index){


const nuevoCarrito = carrito.filter(

(_,i)=> i !== index

)


setCarrito(nuevoCarrito)


}




const total = carrito.reduce(

(acumulador,producto)=> acumulador + producto.precio,

0

)




return(


<div>


<BarraNavegacion


busqueda={busqueda}

setBusqueda={setBusqueda}


volverInicio={volverInicio}


setMostrarCarrito={setMostrarCarrito}


cantidadCarrito={cantidadCarrito}


/>





<button

className="volver"

onClick={volverInicio}

>

← Volver

</button>







<div className="carrito">


<h1 className="titulo-carrito">

Carrito de compras

</h1>





{

carrito.length === 0 ?


<h2>

El carrito está vacío

</h2>


:


carrito.map((producto,index)=>(


<div

className="producto-carrito"

key={index}

>


<img

src={producto.imagenFrontal}

className="foto-carrito"

/>





<div>


<h2>

{producto.nombre}

</h2>


<p>

${producto.precio.toLocaleString("es-CL")}

</p>


</div>





<button

className="eliminar"

onClick={()=>eliminarProducto(index)}

>

Eliminar

</button>




</div>


))


}





<h2 className="total">

Total:

${total.toLocaleString("es-CL")}

</h2>





<button

className="comprar-grande"

>

Finalizar compra

</button>




</div>



</div>


)


}


export default PaginaCarrito