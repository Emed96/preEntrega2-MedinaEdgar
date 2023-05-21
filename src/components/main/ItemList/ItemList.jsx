import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({termos}) => {
  return (
    <div className='ItemsContainer'>
        {termos.map(termo => 
            <Item key={termo.CODIGO} {...termo}/>
        )}
    </div>
  )
}

export default ItemList
