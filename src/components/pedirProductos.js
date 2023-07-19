import React from 'react'
import data from "../components/ItemListContainer/data/productos.json"

const pedirProductos = ()=> {
  return new Promise ((resolve, reject) =>{
    resolve(data)
  })
}

export default pedirProductos