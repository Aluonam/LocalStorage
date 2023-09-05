import React, {useEffect, useState} from 'react'

const Input = () => {

    const [datosUsuario, setDatosUsuario] = useState()
    const [infoGuardada, setInfoGuardada] = useState()

    //Funcion guardar en ocal
    const handleGuardarEnLocal = () => {
        localStorage.setItem("nombre de usuario", JSON.stringify([{nombre:"Paula",apellidos:"Cano Roman"}]));
    }

    //Funcion borrar lo guardado en local
    const handleBorrarLocal = () =>{
        localStorage.removeItem("nombre de usuario");
    }

    const handleLimpiarTodoElLocal = ()=>{
        localStorage.clear();
    }

    useEffect(() => {
      //guardar datos
      const datosLocal = localStorage.getItem("nombre de usuario")
      setInfoGuardada(JSON.parse(datosLocal));
    }, [])
    

    
  return (
    <>
    {/* {infoGuardada} */}
    {/* {datosUsuario} */}
    <input onChange={(e)=>{setDatosUsuario(e.target.value)}}></input>
    <button onClick={()=>{handleGuardarEnLocal()}}>guardar en local</button>
    <button onClick={()=>{handleBorrarLocal()}}>eliminar localStorage</button>
    <button onClick={()=>{handleLimpiarTodoElLocal()}}>eliminar todo el localStorage</button>
    Nombre guardado: {infoGuardada?.[0].nombre}
    <br/>
    apellidos guardados: {infoGuardada?.[0].apellidos}
    </>
  )
}

export default Input