import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const getTermoById = (id) => {
        const [termos, setTermos] = useState([]);
        useEffect(() => {
            fetch('./src/assets/catalog.json')
                .then(resp => resp.json())
                .then(data => setTermos(data))
                .catch(e => console.log(e))
        }, []);

        return termos.find(termo => termo.CODIGO === id)
    }

  return (
    <div>
        <h2>Detalles</h2>
        <ItemDetail {...getTermoById('BP017+SS')}/>
    </div>
  )
}

export default ItemDetailContainer
