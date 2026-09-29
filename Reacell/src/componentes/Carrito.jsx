function Carrito({
  carrito,
  setCarrito
}){


function eliminarProducto(id){


const nuevoCarrito = carrito.filter(producto => producto.id !== id)


setCarrito(nuevoCarrito)


}



return(

<div className="carrito">


<h2>
Carrito
</h2>

<img
src={producto.imagen}
className="foto-carrito"
/>

{

carrito.length === 0 ?

<p>
No hay productos agregados
</p>


:


carrito.map((producto,index)=>(


<div className="producto-carrito" key={index}>


<div>


<h3>
{producto.nombre}
</h3>


<p>

${producto.precio.toLocaleString("es-CL")}

</p>


</div>




<button

className="eliminar"

onClick={()=>eliminarProducto(producto.id)}

>

Eliminar

</button>



</div>


))


}


</div>


)


}


export default Carrito