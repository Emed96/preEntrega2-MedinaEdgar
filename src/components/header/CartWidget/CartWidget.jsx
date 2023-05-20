import React from 'react'
import './CartWidget.css'
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faOpencart } from '@fortawesome/free-brands-svg-icons'*/
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const CartWidget = () => {
    let cartItems = 4;
  return (
    <div className='CartWidget'>
        <div className='cartIcon'>
            {/* <FontAwesomeIcon icon={faOpencart}/> */}
            <i className="fi fi-rr-shopping-cart"></i>
        </div>
        <ItemListContainer greeting={cartItems}/>
    </div>
  )
}

export default CartWidget
