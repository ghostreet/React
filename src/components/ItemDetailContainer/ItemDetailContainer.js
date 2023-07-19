import React from 'react'

const ItemDetailContainer = ( {producto} ) =>{
  return (
      <div>
          <img src={producto.img} alt={producto.file_name} />
          <h2>{producto.file_name}</h2>
          <p>{producto.id}</p>
          <p>{producto.version}</p>
          <p>{producto.url}</p>         
      </div>
  )
}

export default ItemDetailContainer