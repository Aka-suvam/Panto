 import { PiShoppingCartSimpleBold } from "react-icons/pi";
 import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
 import Logo from "../../assets/images/Logo.svg";
 import { NavLink,Link } from "react-router-dom";
 import { useLocation } from 'react-router-dom';
 import { useSelector } from "react-redux";
import './Header.css';
import { useState } from "react";

 const Header=()=>{
    const location=useLocation();

    const  headerClass = location.pathname === ('/shop')|| (location.pathname.startsWith("/products/")) || location.pathname === ('/about')|| location.pathname === ('/contact') ||location.pathname === ('/Shopping-cart')? 'navbar' : 'Header' ;

     const Cartt =location.pathname=== ('/shop') || (location.pathname.startsWith("/products/"))|| location.pathname === ('/about') || location.pathname === ('/contact') || location.pathname === ('/Shopping-cart')?'Cart':'cart';

     const Cartcount=location.pathname=== ('/shop') || (location.pathname.startsWith("/products/"))|| location.pathname === ('/about') || location.pathname === ('/contact')||location.pathname === ('/Shopping-cart')?'cartnumber':'cart-number';
     
     const cartItems=useSelector((store)=>store.cart.items);
   //console.log(cartItems);
   
   // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const  mobileMenu = (location.pathname === ('/shop')|| (location.pathname.startsWith("/products/")) || location.pathname === ('/about')|| location.pathname === ('/contact') ||location.pathname === ('/Shopping-cart')) ? 'Mobile-menu' : 'mobile-menu' ;
  
  const [mobileNav,setMobileNav]=useState(false);

  
  const handleMobileNavToggle = () => {
   
    setMobileNav(!mobileNav)
    window.scrollTo(0, 0);
  };

  
     
 return (<header className={`${headerClass}`}>
     <Link to="/" className="text-link">     
         <div className="logo_container">
         <div className="logo-img-container">
         <img src={Logo} alt="brand-logo"/>
         </div>
         <p className="brand_title">Panto</p>
        </div>
        </Link> 
        <nav className="nav_link">
            <ul> 
                <li><NavLink  to="/" className="text-link" onClick={()=>{ window.scrollTo(0, 0)}} >Home</NavLink></li>
                <li><NavLink to="/shop" className="text-link" onClick={()=>{ window.scrollTo(0, 0)}}>Shop</NavLink></li>
                <li><NavLink to="/about"  className="text-link" onClick={()=>{ window.scrollTo(0, 0)}}>About Us</NavLink></li>
                <li><NavLink to="/contact"  className="text-link" onClick={()=>{ window.scrollTo(0, 0)}}>Contact Us</NavLink></li>
            </ul>
        </nav>
        <Link to='/Shopping-cart'  className="text-link" onClick={()=>{ window.scrollTo(0, 0)}} ><PiShoppingCartSimpleBold className={`${Cartt}`} /></Link>
       {/*cartItems.length>0 && (
       <div className={`${Cartcount}`}>{cartItems.length}</div>
       ) */}
       {totalQuantity > 0 && (
        <div className={`${Cartcount}`}>{totalQuantity}</div>
      )}
      <AiOutlineMenu className= {`${mobileMenu}`}  onClick={handleMobileNavToggle}/>

      <div className={`mobile-nav-full ${mobileNav ?"showmobilenav":"hidemobilenav"}`}>
      <AiOutlineClose  className="cross" onClick={handleMobileNavToggle}/>  
      <div className="mobile-nav_link">
                <NavLink  to="/"     onClick={handleMobileNavToggle} >Home</NavLink>
                <NavLink to="/shop"   onClick={handleMobileNavToggle}>Shop</NavLink>
                <NavLink to="/about"   onClick={handleMobileNavToggle}>About Us</NavLink>
                <NavLink to="/contact"   onClick={handleMobileNavToggle}>Contact Us</NavLink>
            
        </div>
    </div>
      </header>)
}

export default Header;