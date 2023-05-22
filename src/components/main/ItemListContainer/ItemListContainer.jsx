import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'   
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [termos, setTermos] = useState([]);
    useEffect(() => {
        fetch('./src/assets/catalog.json')
            .then(resp => resp.json())
            .then(data => setTermos(data))
            .catch(e => console.log(e))
    }, []);

  return (
    <div className='Catalogo'>
        <h2>CATALOGO</h2>
        <ItemList className='ItemList' termos={termos}/>
    </div>
  )
}

export default ItemListContainer
