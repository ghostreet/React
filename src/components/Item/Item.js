import React from 'react'

const Item = ( {producto} ) =>{
        return (
        <div>
            <section>
            <img src={producto.img} alt={producto.file_name} />
            <h2>{producto.file_name}</h2>
            <p>{producto.version}</p>
            </section>
           <footer>
            <button className='Option'>Ver Detalle</button>
           </footer>
        </div>
   
    )
  }
  //<p>{producto.id}</p>//
  //p>{producto.url}</p>// 
export default Item