import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div className='ListContainer'>
      <span>{props.greeting}</span>
    </div>
  )
}

export default ItemListContainer
