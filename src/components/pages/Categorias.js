import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pedirProductos from '../pedirProductos'

function Categorias() {

  const parametros = useParams()
  let [productos,setProductos] = useState([])

  useEffect(()=>{

    const filtrados = pedirProductos.filter((item)=>{
      return item.categoria === parametros.id
  })
})
  return (
    <div>Categorias : {parametros.id}</div>
  )
}

export default Categorias