import {useState} from "react"

import Inicio from "./paginas/Inicio"
import DetalleCelular from "./paginas/DetalleCelular"
import PaginaCarrito from "./paginas/PaginaCarrito"



function App(){


const [celularSeleccionado,setCelularSeleccionado] = useState(null)


const [carrito,setCarrito] = useState([])


const [mostrarCarrito,setMostrarCarrito] = useState(false)


const [busqueda,setBusqueda] = useState("");





function agregarCarrito(celular){

  console.log("AGREGANDO AL CARRITO:", celular)
  
  setCarrito((carritoActual)=>[
  ...carritoActual,
  celular
  ])
  
  }





function volverInicio(){


setCelularSeleccionado(null)

setMostrarCarrito(false)


}





return(


mostrarCarrito ?


<PaginaCarrito


carrito={carrito}


setCarrito={setCarrito}


volverInicio={volverInicio}


busqueda={busqueda}


setBusqueda={setBusqueda}


setMostrarCarrito={setMostrarCarrito}


cantidadCarrito={carrito.length}



/>



:



celularSeleccionado ?



<DetalleCelular


celular={celularSeleccionado}


volverInicio={volverInicio}


agregarCarrito={agregarCarrito}


busqueda={busqueda}


setBusqueda={setBusqueda}


setMostrarCarrito={setMostrarCarrito}


cantidadCarrito={carrito.length}



/>



:



<Inicio


seleccionar={setCelularSeleccionado}


agregarCarrito={agregarCarrito}


setMostrarCarrito={setMostrarCarrito}


cantidadCarrito={carrito.length}


busqueda={busqueda}


setBusqueda={setBusqueda}


volverInicio={volverInicio}



/>



)


}



export default App