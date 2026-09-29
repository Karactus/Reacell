import {useState} from "react"

import BarraNavegacion from "../componentes/BarraNavegacion"



function DetalleCelular({

celular,
volverInicio,
agregarCarrito,
busqueda,
setBusqueda,
setMostrarCarrito,
cantidadCarrito

}){


const [mostrarComponentes,setMostrarComponentes] = useState(false)

const [mostrarDetalles,setMostrarDetalles] = useState(false)



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




<div className="detalle-producto">



<div className="galeria-detalle">


<img

src={celular.imagenFrontal}

className="foto-detalle"

/>


<img

src={celular.imagenTrasera}

className="foto-detalle"

/>


</div>





<div className="informacion-producto">


<div className="titulo-compra">


<div>


<h1>

{celular.nombre}

</h1>


<h2>

${celular.precio.toLocaleString("es-CL")}

</h2>


</div>




<button

className="comprar-grande"

onClick={()=>agregarCarrito(celular)}

>

Comprar

</button>


</div>





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


<p>

Procesador: {celular.procesador}

</p>





<button

className="desplegable"

onClick={()=>setMostrarComponentes(!mostrarComponentes)}

>

▼ Componentes del celular

</button>




{

mostrarComponentes &&

<ul>

{

celular.componentes.map((item,index)=>(

<li key={index}>

✓ {item}

</li>

))

}

</ul>

}





<button

className="desplegable"

onClick={()=>setMostrarDetalles(!mostrarDetalles)}

>

▼ Detalles del reacondicionado

</button>




{

mostrarDetalles &&

<ul>

{

celular.detalles.map((item,index)=>(

<li key={index}>

{item}

</li>

))

}

</ul>

}





</div>



</div>




<div className="navegacion-productos">


<button>

← Anterior

</button>


<button>

Siguiente →

</button>


</div>




</div>


)


}


export default DetalleCelular