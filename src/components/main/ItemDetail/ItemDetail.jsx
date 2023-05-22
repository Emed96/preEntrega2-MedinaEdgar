import React from 'react'

const ItemDetail = ({CODIGO, NOMBRE, TIPO, PRECIO}) => {
  return (
    <div>
        <img src={`./images/${CODIGO}.png`} alt={NOMBRE} />
        <h3>{NOMBRE}</h3>
        <p className='ItemDetail'>
            <span className='ItemId'>{CODIGO}</span>
            <span className='ItemTipo'>{TIPO}</span>
            <span className='ItemPrecio'>${PRECIO}</span>
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis consequatur, fuga ex dignissimos animi culpa distinctio aperiam assumenda repellat et suscipit temporibus iure tempore illum, libero quas officia omnis. Illum.</p>
    </div>
  )
}

export default ItemDetail
