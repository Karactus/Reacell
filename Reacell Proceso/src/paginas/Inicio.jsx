import {useState} from "react"

import {celulares} from "../datos/celulares"

import BarraNavegacion from "../componentes/BarraNavegacion"
import Filtros from "../componentes/Filtros"
import ListaCelulares from "../componentes/ListaCelulares"



function Inicio({

seleccionar,

agregarCarrito,

setMostrarCarrito,

cantidadCarrito,

busqueda,

setBusqueda,

volverInicio

}){



const [marcaSeleccionada,setMarcaSeleccionada] = useState("Todas")


const [estadoSeleccionado,setEstadoSeleccionado] = useState("Todos")


const [ramSeleccionada,setRamSeleccionada] = useState("Todas")


const [almacenamientoSeleccionado,setAlmacenamientoSeleccionado] = useState("Todos")






const celularesFiltrados = celulares.filter((celular)=>{



const coincideNombre =

celular.nombre

.toLowerCase()

.includes(busqueda.toLowerCase())




const coincideMarca =

marcaSeleccionada === "Todas"

||

celular.marca === marcaSeleccionada





const coincideEstado =

estadoSeleccionado === "Todos"

||

celular.estado === estadoSeleccionado





const coincideRam =

ramSeleccionada === "Todas"

||

celular.ram === ramSeleccionada





const coincideAlmacenamiento =

almacenamientoSeleccionado === "Todos"

||

celular.almacenamiento === almacenamientoSeleccionado





return(

coincideNombre

&&

coincideMarca

&&

coincideEstado

&&

coincideRam

&&

coincideAlmacenamiento

)


})





return(


<div>




<BarraNavegacion


busqueda={busqueda}

setBusqueda={setBusqueda}


volverInicio={volverInicio}


setMostrarCarrito={setMostrarCarrito}


cantidadCarrito={cantidadCarrito}


/>






<div className="contenido">





<Filtros


marcaSeleccionada={marcaSeleccionada}

setMarcaSeleccionada={setMarcaSeleccionada}



estadoSeleccionado={estadoSeleccionado}

setEstadoSeleccionado={setEstadoSeleccionado}



ramSeleccionada={ramSeleccionada}

setRamSeleccionada={setRamSeleccionada}



almacenamientoSeleccionado={almacenamientoSeleccionado}

setAlmacenamientoSeleccionado={setAlmacenamientoSeleccionado}


/>








<ListaCelulares


lista={celularesFiltrados}


seleccionar={seleccionar}


agregarCarrito={agregarCarrito}


/>






</div>



</div>


)


}



export default Inicio