import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pedirProductos from '../pedirProductos'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

function Categorias() {

  const parametros = useParams();
  let [productos,setProductos] = useState([]);

  useEffect(()=>{

    const filtrados = pedirProductos((item)=>{
      return item.categoria === parametros.id
  });

  setProductos(filtrados);
}, [parametros.id]);

  return (
    <div>
      <h2> Categorias : {parametros.id}</h2>
      {}
        </div>
  );
}

export default Categorias