import logo from "../imagenes/logo.png"



function BarraNavegacion({

busqueda,
setBusqueda,
volverInicio,
setMostrarCarrito,
cantidadCarrito

}){


return(

<header className="barra">


<div 
className="marca"
onClick={volverInicio}
>


<img 
src={logo}
className="logo-imagen"
/>



<h1>
Reacell
</h1>


</div>



<input

className="buscador"

value={busqueda}

onChange={(e)=>setBusqueda(e.target.value)}

placeholder="Buscar celulares..."

/>



<div className="acciones">


<button>
Iniciar sesión
</button>


<button>
Registrarse
</button>


<button
onClick={()=>setMostrarCarrito(true)}
>

🛒 {cantidadCarrito}

</button>


</div>



</header>


)

}


export default BarraNavegacion