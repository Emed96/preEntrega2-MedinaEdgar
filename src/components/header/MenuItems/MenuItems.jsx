import React from 'react'
import './MenuItems.css'

const MenuItems = () => {
  return (
    <nav>
        <ul className='Menu'>
            <li className="itemMenu"><a href="#index">NOSOTROS</a></li>
            <li className="itemMenu"><a href="#index">GALERIA</a></li>
            <li className="itemMenu"><a href="#index">SERVICIOS</a></li>
            <li className="itemMenu"><a href="#index">CONTACTO</a></li>
        </ul>      
    </nav>
  )
}

export default MenuItems
