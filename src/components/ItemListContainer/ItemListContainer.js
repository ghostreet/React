import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import pedirProductos from "../pedirProductos";
import "./ItemListContainer.css";


const ItemListContainer = ({}) => {

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        pedirProductos()
            .then((res) =>{
                setProductos(res);
        })
    }, [])
   

    return (
        <div>
           <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;