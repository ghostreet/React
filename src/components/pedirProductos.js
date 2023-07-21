import React from 'react'
import data from "../components/ItemListContainer/data/productos.json"

export const pedirProductos = ()=> {
  return new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(data)
    },500)
    
  })
}

export default pedirProductos