import React, { useEffect, useState } from 'react'
import pedirProductos from '../pedirProductos'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ()=> {
  const [producto, setProducto] =useState(null)

  useEffect(()=> {
    pedirProductos()
      .then(response => {
        setProducto(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer