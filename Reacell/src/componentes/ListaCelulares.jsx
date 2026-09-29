import TarjetaCelular from "./TarjetaCelular"



function ListaCelulares({

lista,

seleccionar,

agregarCarrito

}){


return(


<div className="lista">


{

lista.map((celular)=>(


<TarjetaCelular

key={celular.id}

celular={celular}

seleccionar={seleccionar}

agregarCarrito={agregarCarrito}

/>


))


}


</div>


)


}


export default ListaCelulares