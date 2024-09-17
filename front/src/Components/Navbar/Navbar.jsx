import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'



export const Navbar = () => {

  const [menu,setMenu] = useState("shop");




  return (
    <div className='navbar'>

      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Comprar</p>

      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to ='/'>Shop</Link > {menu ==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Squishmallows")}}><Link style= {{textDecoration: 'none'}}to ='/Squishmallows'>Squishmallows</Link>{menu ==="Squishmallows"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Galex")}}><Link style= {{textDecoration: 'none'}} to='/Galex'>Galex</Link>{menu ==="Galex"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Muñelocos")}}><Link style= {{textDecoration: 'none'}} to ='/Muñelocos'>Muñelocos</Link>{menu ==="Muñelocos"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to ='login'><button>login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>

      </div>

    </div>
  )
}

export default Navbar
