function Filtros({

  marcaSeleccionada,
  setMarcaSeleccionada,
  
  estadoSeleccionado,
  setEstadoSeleccionado,
  
  ramSeleccionada,
  setRamSeleccionada,
  
  almacenamientoSeleccionado,
  setAlmacenamientoSeleccionado
  
  }){
  
  
  return(
  
  
  <aside className="filtros">
  
  
  <h3>
  Filtros
  </h3>
  
  
  
  <h4>
  Marca
  </h4>
  
  
  <div className="opciones">
  
  
  <button onClick={()=>setMarcaSeleccionada("Todas")}>
  Todas
  </button>
  
  
  <button onClick={()=>setMarcaSeleccionada("Samsung")}>
  Samsung
  </button>
  
  
  <button onClick={()=>setMarcaSeleccionada("Xiaomi")}>
  Xiaomi
  </button>
  
  
  <button onClick={()=>setMarcaSeleccionada("Motorola")}>
  Motorola
  </button>
  
  
  <button onClick={()=>setMarcaSeleccionada("Honor")}>
  Honor
  </button>
  
  
  </div>
  
  
  
  
  
  <h4>
  Estado
  </h4>
  
  
  <button onClick={()=>setEstadoSeleccionado("Todos")}>
  Todos
  </button>
  
  
  <button onClick={()=>setEstadoSeleccionado("Nuevo")}>
  Nuevo
  </button>
  
  
  <button onClick={()=>setEstadoSeleccionado("Usado sin detalles")}>
  Usado sin detalles
  </button>
  
  
  <button onClick={()=>setEstadoSeleccionado("Usado con detalles")}>
  Usado con detalles
  </button>
  
  
  
  
  
  
  <h4>
  RAM
  </h4>
  
  
  <button onClick={()=>setRamSeleccionada("Todas")}>
  Todas
  </button>
  
  
  <button onClick={()=>setRamSeleccionada("4GB")}>
  4GB
  </button>
  
  
  <button onClick={()=>setRamSeleccionada("6GB")}>
  6GB
  </button>
  
  
  <button onClick={()=>setRamSeleccionada("8GB")}>
  8GB
  </button>
  
  
  
  
  
  
  <h4>
  Almacenamiento
  </h4>
  
  
  <button onClick={()=>setAlmacenamientoSeleccionado("Todos")}>
  Todos
  </button>
  
  
  <button onClick={()=>setAlmacenamientoSeleccionado("64GB")}>
  64GB
  </button>
  
  
  <button onClick={()=>setAlmacenamientoSeleccionado("128GB")}>
  128GB
  </button>
  
  
  <button onClick={()=>setAlmacenamientoSeleccionado("256GB")}>
  256GB
  </button>
  
  
  
  </aside>
  
  
  )
  
  
  }
  
  
  export default Filtros