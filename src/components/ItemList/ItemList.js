
import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemList = ( {productos} )=> {
     return (
      <div>
        <h1>Productos</h1>
          {   
              productos.lenght > 0 && 
              productos.map((producto)=> {
                  return (
                     <ItemDetailContainer key={producto.id} producto={producto}/>
                          )
              })
          }
      </div>
  )
};

export default ItemList