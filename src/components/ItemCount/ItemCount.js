import React from 'react'
import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

const ItemCount =({stock, initial, onAdd})=> {
  const [quantity, setQuantity] = useState(initial)

  const increment = ()=> {
    if (quantity < stock) {
        setQuantity(quantity + 1)
    }
  }

  const decrement = ()=>{
    if(quantity > 1) {
        setQuantity(quantity - 1)
    }
  }
 
  return (
    <div className='counter'>
      <button className='Button' onClick={decrement}>-</button>
      <h4 className='Number'>{quantity}</h4>
      <button className='Button' onClick={increment}>+</button>
      <button className='Button' onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
