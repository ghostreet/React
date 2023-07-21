
import React from 'react'
import Item from '../Item/Item';

const ItemList = ( {productos} )=> {
     return (
      <div>
        <h1>Productos</h1>
        <div>
        { productos.length > 0 && 
              productos.map((producto)=> {
                  return <Item key={producto.id} producto={producto}/>                       
              })
        }
        </div>     
      </div>
  );
};

export default ItemList