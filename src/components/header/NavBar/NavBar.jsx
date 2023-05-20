import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import MenuItems from '../MenuItems/MenuItems'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
        <div className='logoContainer'>
            <a href="#index" className='logo'>
            <h1>CRAFTING</h1>
            </a>
        </div>
        <MenuItems/>
        <CartWidget/>
    </>
  )
}

export default NavBar