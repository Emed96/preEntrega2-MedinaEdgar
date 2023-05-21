import React from 'react'
import './Item.css'

const Item = ({CODIGO, NOMBRE, TIPO, PRECIO}) => {
  return (
    <div className='ItemContainer'>
        <img src={`./images/${CODIGO}.png`} alt={NOMBRE} />
        <h3>{NOMBRE}</h3>
        <p className='ItemDetail'>
            <span className='ItemId'>{CODIGO}</span>
            <span className='ItemTipo'>{TIPO}</span>
            <span className='ItemPrecio'>${PRECIO}</span>
        </p>
        <button className='Detalles'>
            Detalles
        </button>
    </div>
  )
}

export default Item
