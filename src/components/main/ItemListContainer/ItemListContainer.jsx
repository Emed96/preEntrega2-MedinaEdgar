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
        {/* <div className='ItemListContainer'>
            {termos.map(termo => {
                return (
                    <div className='ItemContainer' key={termo.CODIGO}>
                        <img src={`./images/${termo.CODIGO}.png`} alt="" />
                        <h3>{termo.NOMBRE}</h3>
                        <p className='ItemDetail'>
                            <span className='ItemId'>{termo.CODIGO}</span>
                            <span className='ItemTipo'>{termo.TIPO}</span>
                            <span className='ItemPrecio'>${termo.PRECIO}</span>
                        </p>
                    </div>
                )
            })}
        </div> */}
    </div>
  )
}

export default ItemListContainer
