import React, { useContext, useState, useRef } from 'react'
import './navbar.css'

//Importing the logos from the Assets folder
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.jpg'


const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const openRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle("nav-menu-visible");
        openRef.current.classList.toggle("open");
    }

    const press_toggle = (e) =>{
        if(menuRef.current.classList.contains("nav-menu-visible")){
            dropdown_toggle();
        }
    }

    return (
        <div className = 'navbar'>
            <div className='nav-logo'>
                {/*Displaying the logo*/}
                <Link onClick={()=>{setMenu("shop")}} to='/' ><img src={logo} alt="" /></Link>
                <Link onClick={()=>{setMenu("shop")}} style={{textDecoration: 'none'}} to='/'><p>SHOPPER</p></Link>
            </div>
            <img className='nav-dropdown' onClick= {dropdown_toggle} src={nav_dropdown} ref={openRef} alt="" />
            <ul className='nav-menu' ref={menuRef}>
                {/*Displaying the menu*/}
                <li onClick={()=>{setMenu("shop"); press_toggle()}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}</li>
                <li onClick={()=>{setMenu("jewellery"); press_toggle()}}><Link style={{textDecoration: 'none'}} to='/jewellery'>Jewellery</Link>{menu==="jewellery"?<h/>:<></>}</li>
                <li onClick={()=>{setMenu("sarees"); press_toggle()}} ><Link style={{textDecoration: 'none'}} to ='/sarees'>Sarees</Link>{menu==="sarees"?<h/>:<></>}</li>
                <li onClick={()=>{setMenu("dresses"); press_toggle()}}><Link style={{textDecoration: 'none'}} to ='/dresses'>Dresses</Link>{menu==="dresses"?<h/>:<></>}</li>                
            </ul>
            <div className="nav-login-cart">
                {/*Displaying the login button*/}
                {localStorage.getItem('auth-token')?
                <button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>:
                <Link onClick={()=>{setMenu("nothing")}} to='/login'><button>Login</button></Link>}
                <Link onClick={()=>{setMenu("nothing")}} to = '/cart'><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar